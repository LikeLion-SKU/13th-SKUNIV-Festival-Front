import * as S from "./style";

import Back from "../../assets/icon/Back.svg?react";
import Home from "../../assets/icon/Home.svg?react";
import { Link, useNavigate } from "react-router";
import useHeaderStore from "../../stores/useHeaderStore";
import useClicks from "../../hooks/useClicks";
import LoginModal from "./loginmodal";
import useAdminStore from "../../stores/useAdminStore";

const Header = () => {
  const { title, showBack, showHome, canAccessAdmin } = useHeaderStore();
  const { modalStep, setModalStep } = useAdminStore();

  const navigate = useNavigate();
  const handleClick = useClicks(3, 1000, () => setModalStep(1));

  return (
    <>
      <S.Header>
        {showBack && <Back onClick={() => navigate(-1)} />}
        <S.Title onClick={() => canAccessAdmin && handleClick()}>{title}</S.Title>
        {showHome && (
          <Link to="/">
            <Home />
          </Link>
        )}
      </S.Header>
      {modalStep === 1 && <LoginModal />}
    </>
  );
};

export default Header;
