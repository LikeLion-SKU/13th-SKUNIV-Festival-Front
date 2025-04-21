import { useState } from "react";
import { AddButton, SaveText, FilterContainer, SubText, FilterWrapper } from "./filter.style";
import AdminModal from "./adminModal";
import { useAdminStore } from "../../stores/useAdminStore";

const Filter = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");

  const isAdmin = useAdminStore((state) => state.isLoggedIn);
  const login = useAdminStore((state) => state.login);

  const handleClickSubText = () => {
    const nextCount = clickCount + 1;
    if (nextCount === 3) {
      setShowModal(true);
      setClickCount(0);
    } else {
      setClickCount(nextCount);
    }
  };

  const handleSubmitPassword = (input: string) => {
    if (input === "1234") {
      login();
      setShowModal(false);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <FilterContainer>
      {isAdmin ? (
        <>
          <AddButton>
            <button>등록</button>
          </AddButton>
          <SaveText>저장하고 나가기</SaveText>
        </>
      ) : (
        <SubText onClick={handleClickSubText}>
          <p>모든 분실물은 총학생회 부스에서 관리합니다.</p>
          <p>좌측 상단에 기입된 위치는 습득위치입니다.</p>
        </SubText>
      )}
      <FilterWrapper>
        <button>최신순</button>
      </FilterWrapper>
      {showModal && (
        <AdminModal
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitPassword}
          password={password}
          setPassword={setPassword}
        />
      )}
    </FilterContainer>
  );
};

export default Filter;
