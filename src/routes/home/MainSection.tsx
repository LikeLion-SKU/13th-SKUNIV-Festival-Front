import styled from "@emotion/styled";
import { DotLottiePlayer, type DotLottieCommonPlayer } from "@dotlottie/react-player";
import { useEffect, useRef, useState } from "react";
import blooming from "../../shared/assets/lottie/blooming.json";
import Title from "@image/main_title.svg?react";
import Ko from "@icon/ko.svg?react";
import En from "@icon/en.svg?react";
import Ch from "@icon/ch.svg?react";
import Jp from "@icon/jp.svg?react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

interface MainSectionProps {
  onSelectLang: (lang: string) => void;
  langSelected: boolean;
}

export default function MainSection({ onSelectLang, langSelected }: MainSectionProps) {
  const [animationDone, setAnimationDone] = useState(false);
  const playerRef = useRef<DotLottieCommonPlayer | null>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      const handleComplete = () => setAnimationDone(true);
      player.addEventListener("complete", handleComplete);
      return () => {
        player.removeEventListener("complete", handleComplete);
      };
    }
  }, []);

  const { t } = useTranslation("main");

  return (
    <AnimatePresence mode="wait">
      {langSelected ? (
        <AfterWrapper
          key="after"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <MainTitle />
          <p className="text">{t("festival_title")}</p>
          <p className="text">05.07 ~ 05.09</p>
        </AfterWrapper>
      ) : (
        <BeforeWrapper
          key="before"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.25 }}
        >
          <LottieWrapper>
            <DotLottiePlayer
              ref={playerRef}
              src={blooming}
              autoplay
              loop={false}
              style={{ objectFit: "cover", maxWidth: "375px", margin: "0 auto" }}
            />
          </LottieWrapper>

          {animationDone && (
            <LanguageWrapper>
              <TextBox>
                <p className="text_16">Please select your language.</p>
                <p className="text_14">언어를 선택해주세요.</p>
              </TextBox>

              <LangButton onClick={() => onSelectLang("ko")}>
                <Ko className="icon" />
                한국어
              </LangButton>
              <LangButton onClick={() => onSelectLang("en")}>
                <En className="icon" />
                English
              </LangButton>
              <LangButton onClick={() => onSelectLang("ch")}>
                <Ch className="icon" />
                中文
              </LangButton>
              <LangButton onClick={() => onSelectLang("jp")}>
                <Jp className="icon" />
                にほんご
              </LangButton>
            </LanguageWrapper>
          )}
        </BeforeWrapper>
      )}
    </AnimatePresence>
  );
}

const BeforeWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AfterWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 130px;

  .text {
    color: white;
    font-size: 12px;
    font-family: "HSSanTokki20-Regular";
  }
`;

const MainTitle = styled(Title)`
  margin-top: 100px;
`;

const LottieWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
`;

const LanguageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  animation: fadeInUp 0.2s ease-out forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;

  .text_16 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 2px;
  }

  .text_14 {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 16px;
  }
`;

const LangButton = styled.div`
  width: 161px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.88);
  padding: 8px 12px;
  margin-bottom: 16px;
  border-radius: 46px;
  cursor: pointer;
  color: #111;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 30px;
  }
`;
