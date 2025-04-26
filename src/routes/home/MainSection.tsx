import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import mainImg from "@icon/main_title.svg";
import flower1 from "@icon/flower_1.svg";
import flower2 from "@icon/flower_2.svg";
import ko from "@icon/ko.svg";
import en from "@icon/en.svg";
import ch from "@icon/ch.svg";
import jp from "@icon/jp.svg";

interface MainSectionProps {
  onSelectLang: (lang: string) => void;
  langSelected: boolean;
}

export default function MainSection({ onSelectLang, langSelected }: MainSectionProps) {
  const flower1Ref = useRef<HTMLImageElement>(null);
  const flower2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (langSelected) {
      gsap.fromTo(
        flower1Ref.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: 360,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        flower2Ref.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: -360,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [langSelected]);

  return (
    <MainWrapper>
      <Flower src={flower1} alt="flower1" ref={flower1Ref} className="flower1" />
      <Flower src={flower2} alt="flower2" ref={flower2Ref} className="flower2" />
      <img className="img" src={mainImg} alt="main" />
      {langSelected ? (
        <IntroWrapper>
          <p className="title">2025 서경대학교 대동제</p>
          <p className="date">05.07~05.09</p>
        </IntroWrapper>
      ) : (
        <LanguageWrapper>
          <p className="text_32">welcome!</p>
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
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
  padding-top: 90px;
  margin-bottom: 200px;
  line-height: 150%;

  & > .img {
    position: relative;
    z-index: 2;
  }
`;

const Flower = styled.img`
  position: absolute;
  opacity: 0;
  z-index: 0;

  &.flower1 {
    top: 210px;
    left: 10px;
  }

  &.flower2 {
    top: 123px;
    right: 25px;
  }
`;

const IntroWrapper = styled.div`
  font-family: "HSSanTokki20-Regular", sans-serif;
  & > .title {
    font-size: 14px;
  }

  & > .date {
    font-size: 12px;
  }
`;

const LanguageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .text_32 {
    font-size: 32px;
    font-weight: 800;
    line-height: 197%;
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
    margin-bottom: 20px;
  }
`;

const LangButton = styled.div`
  width: 161px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.88);
  padding: 8px 12px;
  margin-top: 16px;
  border-radius: 46px;
  cursor: pointer;
  color: #111;
  font-size: 16px;
  font-weight: 600;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > .img {
    margin-right: 30px;
  }
`;
