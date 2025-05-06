import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Blooming from "@image/main_title.svg?react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useReservationStore from "../../stores/useReservationStore";
import useHeaderStore from "../../stores/useHeaderStore";
import { useTranslation } from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

import { IoCloseOutline } from "react-icons/io5";
import Flower1 from "@icon/flower_1.svg?react";
import Flower2 from "@icon/flower_2.svg?react";
import Flower3 from "@icon/flower_3.svg?react";
import Ko from "@icon/ko.svg?react";
import En from "@icon/en.svg?react";
import Jp from "@icon/jp.svg?react";
import Ch from "@icon/ch.svg?react";

const DRAWER_WIDTH = 200;

const Drawer = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { update, title } = useHeaderStore();
  const onClose = () => update({ showMenu: false });
  const { setModalStep } = useReservationStore();
  const navigate = useNavigate();

  const [, setLang] = useLanguage();
  const { t } = useTranslation("ui");
  const changeLanguage = (lang: "ko" | "en" | "jp" | "ch") => {
    setLang(lang);
    onClose();
  };

  const MENUS = [
    {
      name: t("main"),
      path: "/",
      icon: <Flower1 />,
    },
    {
      name: t("booth_information"),
      path: "/booth",
      icon: <Flower2 />,
    },
    {
      name: t("booth_tabling"),
      path: "/tabling",
      icon: <Flower3 />,
    },
    {
      name: t("lostandfound"),
      path: "/lostandfound",
      icon: <Flower1 />,
    },
  ];

  return createPortal(
    <>
      <Backdrop
        onClick={() => update({ showMenu: false })}
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",

          duration: 0.25,
        }}
      />
      <Wrapper
        onClick={(e) => e.stopPropagation()}
        key="drawer"
        initial={{ x: DRAWER_WIDTH }}
        animate={{
          x: 0,
        }}
        exit={{ x: DRAWER_WIDTH }}
        transition={{
          ease: "easeInOut",
          duration: 0.25,
        }}
      >
        <Content>
          <CloseButton onClick={onClose}>
            <IoCloseOutline size={24} color="#fff" />
          </CloseButton>
          <Blooming height={150} />
          <Menus>
            {MENUS.map((menu) => (
              <Menu
                key={menu.name}
                onClick={() => {
                  navigate(menu.path);
                  onClose();
                }}
                active={menu.name === title}
              >
                {menu.name}
                {menu.icon}
              </Menu>
            ))}
          </Menus>
        </Content>
        <Footer>
          <CheckReservation
            onClick={() => {
              onClose();
              setModalStep(4);
            }}
          >
            {t("check_reservation")}
          </CheckReservation>
          <Credit
            onClick={() => {
              navigate("/credit");
              onClose();
            }}
          >
            {t("credit")}
          </Credit>
          <Languages>
            <LanguageButton onClick={() => changeLanguage("ko")}>
              <Ko />
            </LanguageButton>
            <LanguageButton onClick={() => changeLanguage("en")}>
              <En />
            </LanguageButton>
            <LanguageButton onClick={() => changeLanguage("ch")}>
              <Ch />
            </LanguageButton>
            <LanguageButton onClick={() => changeLanguage("jp")}>
              <Jp />
            </LanguageButton>
          </Languages>
          <Copyright>© 2025 SKU LIKELION. All rights reserved.</Copyright>
        </Footer>
      </Wrapper>
    </>,
    document.body
  );
};

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9997;
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${DRAWER_WIDTH}px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1e3dc7;
  z-index: 9998;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  all: unset;
  margin-right: auto;
  padding: 8px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Menu = styled.button<{ active: boolean }>`
  all: unset;
  padding: 10px 20px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  background: ${(props) => (props.active ? "rgba(255,255,255,0.05)" : undefined)};
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckReservation = styled.button`
  all: unset;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4aa3ff;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const Credit = styled.button`
  all: unset;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const Languages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const LanguageButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const Copyright = styled.small`
  margin-top: 16px;
  display: block;
  color: #ccc;
  text-align: center;
  font-size: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
`;

export default Drawer;
