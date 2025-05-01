import { useState } from "react";
import { MainButton, Menus, Menu, Container, Gap } from "./style";
import Hamburger from "@icon/hamburger.svg?react";
import Plus from "@icon/plus.svg?react";
import { useNavigate } from "react-router";
import useReservationStore from "../../stores/useReservationStore";
import Modals from "./modals";
import { AnimatePresence, motion } from "framer-motion";

const MotionMenus = motion(Menus);
const MotionMainButton = motion(MainButton);

const FloatingButton = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const { setModalStep } = useReservationStore();

  return (
    <Container>
      <AnimatePresence>
        {opened ? (
          <MotionMenus
            key="menus"
            initial={{ width: 0 }}
            animate={{
              width: "auto",
            }}
            exit={{ width: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.25,
            }}
          >
            <Menu onClick={() => navigate("/tabling")}>부스 예약</Menu>
            <Menu onClick={() => navigate("/booth")}>부스 안내</Menu>
            <Gap />
            <Menu onClick={() => navigate("/lost")}>분실물</Menu>
            <Menu onClick={() => setModalStep(4)}>예약 확인</Menu>
          </MotionMenus>
        ) : null}
      </AnimatePresence>
      <MotionMainButton
        key="mainButton"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          background: opened ? "#4aa3ff" : "#fff",
        }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.25,
        }}
        onClick={() => setOpened((prev) => !prev)}
      >
        {opened ? <Plus /> : <Hamburger />}
      </MotionMainButton>
      <Modals />
    </Container>
  );
};

export default FloatingButton;
