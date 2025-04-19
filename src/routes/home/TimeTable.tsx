import { useState } from "react";
import styled from "styled-components";
import TimeTableCard from "./TimeTableCard";
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
  margin-bottom: 8px;
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
  const [selectedDay, setSelectedDay] = useState<"DAY 2" | "DAY 3">("DAY 2");

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

  const filteredList = artistList.filter((artist) => artist.date === selectedDay);

  return (
    <TimeTableWrapper>
      <DateWrapper>
        <DateBtn selected={selectedDay === "DAY 2"} onClick={() => setSelectedDay("DAY 2")}>
          <p className="en">DAY 2</p>
          <p className="ko">5월 8일 (목)</p>
        </DateBtn>
        <DateBtn selected={selectedDay === "DAY 3"} onClick={() => setSelectedDay("DAY 3")}>
          <p className="en">DAY 3</p>
          <p className="ko">5월 9일 (금)</p>
        </DateBtn>
      </DateWrapper>

      {filteredList.map((artist, index) => (
        <TimeTableCard
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
