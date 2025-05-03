import * as S from "./style";
import { useState } from "react";

import Back from "../../assets/icon/Back.svg?react";
import Home from "../../assets/icon/Home.svg?react";
import { Link, useNavigate } from "react-router";

import useHeaderStore from "../../stores/useHeaderStore";
import useClicks from "../../hooks/useClicks";
import LoginModal from "./loginmodal";
import AdminModal from "../../../routes/lostArticle/adminModal";

import useAdminStore from "../../stores/useAdminStore";
import { useAdminLostStore } from "../../../stores/useAdminLostStore";

const Header = () => {
  const { title, showBack, showHome } = useHeaderStore();
  const modalStep = useAdminStore((state) => state.modalStep);
  const setModalStep = useAdminStore((state) => state.setModalStep);
  const login = useAdminLostStore((state) => state.login);

  const [showLostModal, setShowLostModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = useClicks(3, 1000, () => {
    const header = useHeaderStore.getState();
    const lost = useAdminLostStore.getState();

    if (header.canAccessAdmin) {
      setModalStep(1);
    } else if (header.canAccessLost && !lost.isLoggedIn) {
      setShowLostModal(true);
    }
  });

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
          onSuccess={() => {
            login();
            setShowLostModal(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
