import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router";
import useHeaderStore from "../../stores/useHeaderStore";
import useClicks from "../../hooks/useClicks";
import LoginModal from "./loginmodal";
import AdminModal from "../../../routes/lostArticle/adminModal";
import useAdminStore from "../../stores/useAdminStore";
import { useAdminLostStore } from "../../../stores/useAdminLostStore";
import Drawer from "../Drawer";
import Modals from "./modals";
import { AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronBack } from "react-icons/io5";
import useLanguage from "../../hooks/useLanguage";

const Header = () => {
  const {
    title,
    showBack,
    showHamburger,
    showMenu,
    transparent,
    update,
    canAccessLost,
    canAccessAdmin,
  } = useHeaderStore();
  const { modalStep, setModalStep } = useAdminStore();
  const { login } = useAdminLostStore();

  const [showLostModal, setShowLostModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = useClicks(3, 1000, () => {
    const lost = useAdminLostStore.getState();

    if (canAccessAdmin) {
      setModalStep(1);
    } else if (canAccessLost && !lost.isLoggedIn) {
      setShowLostModal(true);
    }
  });

  const [lang] = useLanguage();

  if (!lang) return null;

  return (
    <>
      <S.Header transparent={transparent}>
        {showBack && (
          <S.Back onClick={() => navigate(-1)}>
            <IoChevronBack size={24} />
          </S.Back>
        )}

        {!transparent && (
          <S.Title onClick={handleClick}>{title?.replace("<br>", "") ?? "불러오는 중..."}</S.Title>
        )}

        {showHamburger && (
          <S.Hamburger onClick={() => update({ showMenu: true })} transparent={transparent}>
            <RxHamburgerMenu size={24} color={transparent ? "#fff" : "#4aa3ff"} />
          </S.Hamburger>
        )}
      </S.Header>

      {/* Drawer */}
      <AnimatePresence>{showMenu && <Drawer />}</AnimatePresence>

      {/* Modals */}
      <Modals />
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
