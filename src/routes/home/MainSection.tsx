import styled from "@emotion/styled";
import { DotLottiePlayer } from "@dotlottie/react-player";
import blooming from "../../shared/assets/lottie/blooming.json";
import maintitle from "@icon/main_title.svg";
import ko from "@icon/ko.svg";
import en from "@icon/en.svg";
import ch from "@icon/ch.svg";
import jp from "@icon/jp.svg";
import FloatingButton from "../../shared/components/FloatingButton";

interface MainSectionProps {
  onSelectLang: (lang: string) => void;
  langSelected: boolean;
}

export default function MainSection({ onSelectLang, langSelected }: MainSectionProps) {
  return (
    <MainWrapper>
      {langSelected ? (
        <LottieWrapper>
          <DotLottiePlayer
            src={blooming}
            autoplay
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        </LottieWrapper>
      ) : (
        <LanguageWrapper>
          <img src={maintitle} alt="maintitle" />
          <p className="text_20">Please select language.</p>
          <p className="text_16">언어를 선택해주세요.</p>

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
      <FloatingButton />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  height: auto;
  position: relative;
  text-align: center;
  color: white;

  & > .img {
    position: relative;
    z-index: 2;
  }
`;

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    margin-bottom: 50px;
    margin-top: 150px;
  }

  & > .text_20 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 4px;
  }
  & > .text_16 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin-bottom: 43px;
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

const LottieWrapper = styled.div`
  display: inline-block;
  position: relative;
  z-index: 3;
`;
