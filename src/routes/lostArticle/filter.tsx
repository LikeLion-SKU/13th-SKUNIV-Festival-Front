import { useAdminLostStore } from "../../stores/useAdminLostStore";
import { useNavigate } from "react-router-dom";
import { AddButton, SaveText, FilterContainer, SubText, FilterWrapper } from "./filter.style";

interface FilterProps {
  sort: "LATEST" | "OLDEST";
  onSortChange: (sort: "LATEST" | "OLDEST") => void;
}

const Filter = ({ sort, onSortChange }: FilterProps) => {
  const isAdmin = useAdminLostStore((state) => state.isLoggedIn);
  const logout = useAdminLostStore((state) => state.logout);

  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/edit");
  };

  const handleSortClick = () => {
    const newSort = sort === "LATEST" ? "OLDEST" : "LATEST";
    onSortChange(newSort);
  };

  const handleLogout = () => {
    logout();
    navigate("/lost");
  };

  return (
    <FilterContainer>
      {isAdmin ? (
        <>
          <AddButton>
            <button onClick={handleClickRegister}>등록</button>
          </AddButton>
          <SaveText onClick={handleLogout}>저장하고 나가기</SaveText>
        </>
      ) : (
        <SubText>
          <p>모든 분실물은 총학생회 부스에서 관리합니다.</p>
          <p>좌측 상단에 기입된 위치는 습득위치입니다.</p>
        </SubText>
      )}
      <FilterWrapper>
        <button onClick={handleSortClick}>{sort === "LATEST" ? "최신순" : "오래된순"}</button>
      </FilterWrapper>
    </FilterContainer>
  );
};

export default Filter;
