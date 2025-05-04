import styled from "@emotion/styled";
import { DotLottiePlayer, type DotLottieCommonPlayer } from "@dotlottie/react-player";
import { useEffect, useRef, useState } from "react";
import blooming from "../../shared/assets/lottie/blooming.json";
import maintitle from "@icon/main_title.svg";
import ko from "@icon/ko.svg";
import en from "@icon/en.svg";
import ch from "@icon/ch.svg";
import jp from "@icon/jp.svg";

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

  return (
    <>
      {langSelected ? (
        <AfterWrapper>
          <img className="img" src={maintitle} alt="maintitle" />
          <p className="text">2025 서경대학교 대동제</p>
          <p className="text"> 05.07 ~ 05.09</p>
        </AfterWrapper>
      ) : (
        <BeforeWrapper>
          <LottieWrapper>
            <DotLottiePlayer
              ref={playerRef}
              src={blooming}
              autoplay
              loop={false}
              style={{
                objectFit: "cover",
              }}
            />
          </LottieWrapper>

          {animationDone && (
            <LanguageWrapper>
              <TextBox>
                <p className="text_16">Please select language.</p>
                <p className="text_14">언어를 선택해주세요.</p>
              </TextBox>

              <LangButton onClick={() => onSelectLang("ko")}>
                <img className="img" src={ko} alt="ko" />
                한국어
              </LangButton>
              <LangButton onClick={() => onSelectLang("en")}>
                <img className="img" src={en} alt="en" />
                English
              </LangButton>
              <LangButton onClick={() => onSelectLang("ch")}>
                <img className="img" src={ch} alt="ch" />
                中文
              </LangButton>
              <LangButton onClick={() => onSelectLang("jp")}>
                <img className="img" src={jp} alt="jp" />
                にほんご
              </LangButton>
            </LanguageWrapper>
          )}
        </BeforeWrapper>
      )}
    </>
  );
}

const BeforeWrapper = styled.div`
  /* width: 390px; */
  height: auto;
`;

const AfterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 130px;

  & > .img {
    width: auto;
    height: auto;
    padding-top: 100px;
  }

  & > .text {
    color: white;
    font-size: 12px;
    font-family: "HSSanTokki20-Regular";
  }
`;

const LottieWrapper = styled.div`
  width: 100vw;
  max-width: 390px;
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
  padding-bottom: 30px;
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

  & > .text_16 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 2px;
  }

  & > .text_14 {
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
  flex-direction: row;
  align-items: center;

  & > .img {
    margin-right: 30px;
  }
`;
