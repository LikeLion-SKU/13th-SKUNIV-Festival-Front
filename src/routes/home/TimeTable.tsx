import { useState } from "react";
import styled from "styled-components";
import ArtistCard from "./ArtistCard";
import artistImg from "@image/artist_sample.png";

export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const DateBtn = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 50px;
  border-radius: 10px;
  border: 1.5px solid #fff;
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  color: ${(props) => (props.selected ? "#2F47A4" : "#fff")};
  font-weight: 700;
  font-size: 10px;
  cursor: pointer;

  & > .en {
    font-size: 14px;
  }

  & > .ko {
    font-size: 10px;
  }
`;

export default function TimeTable() {
  const [selectedDay, setSelectedDay] = useState<"day2" | "day3">("day2");

  const artistList = {
    day2: [
      {
        time: "18:00~18:30",
        description: "경영학과 밴드",
        name: "워워커스",
        image: artistImg,
      },
      {
        time: "18:30~19:00",
        description: "나씨밴 오라오라",
        name: "나상현씨 밴드",
        image: artistImg,
      },
      {
        time: "19:00~19:30",
        description: "모카님 ㅠㅜ",
        name: "아일릿",
        image: artistImg,
      },
    ],
    day3: [
      {
        time: "17:00~18:00",
        description: "힙합 공연 동아리",
        name: "SDR",
        image: artistImg,
      },
      {
        time: "18:00~18:30",
        description: "경영학과 밴드",
        name: "뭐뭐뭐뭐",
        image: artistImg,
      },
      {
        time: "18:30~19:00",
        description: "경영학과 밴드",
        name: "유다빈 밴드",
        image: artistImg,
      },
    ],
  };

  return (
    <TimeTableWrapper>
      <DateWrapper>
        <DateBtn selected={selectedDay === "day2"} onClick={() => setSelectedDay("day2")}>
          <p className="en">Day 2</p>
          <p className="ko">5월 8일 (목)</p>
        </DateBtn>
        <DateBtn selected={selectedDay === "day3"} onClick={() => setSelectedDay("day3")}>
          <p className="en">Day 3</p>
          <p className="ko">5월 9일 (금)</p>
        </DateBtn>
      </DateWrapper>

      {artistList[selectedDay].map((artist, index) => (
        <ArtistCard
          key={index}
          time={artist.time}
          description={artist.description}
          name={artist.name}
          image={artist.image}
        />
      ))}
    </TimeTableWrapper>
  );
}
