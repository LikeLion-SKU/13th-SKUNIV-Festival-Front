import { useState } from "react";
import styled from "styled-components";
import LineUpCard from "./LineUpCard";
import leftArrow from "@icon/arrow_left.svg";
import rightArrow from "@icon/arrow_right.svg";
import artistImg from "@image/artist_sample.png";

export const LineupWrapper = styled.div`
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

const CardWrapper = styled.div<{ $translateX: number }>`
  display: flex;
  position: absolute;
  margin-left: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(${(props) => props.$translateX}px);
  transition: transform 0.3s ease-in-out;
`;

const artistList = [
  {
    date: "DAY 2",
    time: "18:00~18:30",
    description: "경영학과 밴드",
    name: "워워커스",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "18:30~19:00",
    description: "나씨밴 오라오라",
    name: "나상현씨 밴드",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "19:00~19:30",
    description: "모카님 ㅠㅜ",
    name: "아일릿",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "17:00~18:00",
    description: "힙합 공연 동아리",
    name: "SDR",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:00~18:30",
    description: "경영학과 밴드",
    name: "뭐뭐뭐뭐",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:30~19:00",
    description: "경영학과 밴드",
    name: "유다빈 밴드",
    image: artistImg,
  },
];

export default function LineUp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % artistList.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artistList.length - 1 : prev - 1));
  };

  const getTranslateX = () => {
    const cardSpacing = 55;
    const centerOffset = (artistList.length - 1) / 2;
    return (centerOffset - currentIndex) * cardSpacing;
  };

  return (
    <LineupWrapper>
      <ArrowButton $left onClick={prev}>
        <img src={leftArrow} alt="이전" />
      </ArrowButton>

      <CardWrapper $translateX={getTranslateX()}>
        {artistList.map((artist, index) => (
          <LineUpCard key={artist.name} {...artist} isCenter={index === currentIndex} />
        ))}
      </CardWrapper>

      <ArrowButton onClick={next}>
        <img src={rightArrow} alt="다음" />
      </ArrowButton>
    </LineupWrapper>
  );
}
