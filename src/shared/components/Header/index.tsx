import * as S from "./style";

import { useState } from "react";
import Back from "../../assets/icon/Back.svg?react";
import Home from "../../assets/icon/Home.svg?react";
import { Link, useNavigate } from "react-router";
import useHeaderStore from "../../stores/useHeaderStore";
import useClicks from "../../hooks/useClicks";
import LoginModal from "./loginmodal";
import useAdminStore from "../../stores/useAdminStore";
import AdminModal from "../../../routes/lostArticle/adminModal";
import { useAdminLostStore } from "../../../stores/useAdminLostStore";

const Header = () => {
  const { title, showBack, showHome, canAccessAdmin, canAccessLost } = useHeaderStore();
  const { modalStep, setModalStep } = useAdminStore();
  const { isLoggedIn, login } = useAdminLostStore(); //분실물용 로그인 상태

  const [showLostModal, setShowLostModal] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleClick = useClicks(3, 1000, () => {
    if (canAccessAdmin) {
      setModalStep(1);
    } else if (canAccessLost && !isLoggedIn) {
      setShowLostModal(true);
    }
  });
  

  const handleSubmitPassword = (input: string) => {
    if (input === "1234") {
      login();
      setShowLostModal(false);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <>
      <S.Header>
        {showBack && <Back onClick={() => navigate(-1)} />}
        <S.Title onClick={handleClick}>
          {title ?? "불러오는 중..."}
        </S.Title>
        {showHome && (
          <Link to="/">
            <Home />
          </Link>
        )}
      </S.Header>
      {modalStep === 1 && <LoginModal />}
      {showLostModal && (
        <AdminModal
          onClose={() => setShowLostModal(false)}
          onSubmit={handleSubmitPassword}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  );
};

export default Header;
