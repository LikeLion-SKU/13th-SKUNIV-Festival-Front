import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import mainImg from "@icon/main_title.svg";
import flower1 from "@icon/flower_1.svg";
import flower2 from "@icon/flower_2.svg";

export default function MainSection() {
  const flower1Ref = useRef<HTMLImageElement>(null);
  const flower2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <MainWrapper>
      <Flower src={flower1} alt="flower1" ref={flower1Ref} className="flower1" />
      <Flower src={flower2} alt="flower2" ref={flower2Ref} className="flower2" />
      <img className="img" src={mainImg} alt={mainImg} />
      <p className="title">2025 서경대학교 대동제</p>
      <p className="date">05.07~05.09</p>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  font-family: "HSSanTokki20-Regular", sans-serif;
  text-align: center;
  color: white;
  padding-top: 90px;
  margin-bottom: 200px;
  line-height: 150%;

  & > .img {
    position: relative;
    z-index: 2;
  }

  & > .title {
    font-size: 14px;
  }

  & > .date {
    font-size: 12px;
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
