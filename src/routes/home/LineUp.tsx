import { useState } from "react";
import styled from "styled-components";
import LineUpCard from "./LineUpCard";
import artistList from "./ArtistList";
import leftArrow from "@icon/arrow_left.svg";
import rightArrow from "@icon/arrow_right.svg";

export default function LineUp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artistList.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % artistList.length);
  };

  // 중앙 카드 기준 3장 추출
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + artistList.length) % artistList.length;
    const nextIndex = (currentIndex + 1) % artistList.length;

    return [
      { ...artistList[prevIndex], isCenter: false },
      { ...artistList[currentIndex], isCenter: true },
      { ...artistList[nextIndex], isCenter: false },
    ];
  };

  return (
    <LineupWrapper>
      <ArrowButton $left onClick={prev}>
        <img src={leftArrow} alt="이전" />
      </ArrowButton>

      <CardWrapper>
        {getVisibleCards().map((artist, i) => (
          <LineUpCard key={`${artist.name}-${i}`} {...artist} />
        ))}
      </CardWrapper>

      <ArrowButton onClick={next}>
        <img src={rightArrow} alt="다음" />
      </ArrowButton>
    </LineupWrapper>
  );
}

const LineupWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 283px;
  overflow: hidden;
  margin: 0 auto;
`;

const ArrowButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 45px" : "right: 45px")};
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;

  img {
    width: 24px;
    height: 24px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
`;
