import { useState } from "react";
import styled from "@emotion/styled";
import TimeTableCard from "./TimeTableCard";
import TimeTableModal from "./TimeTableModal";
import artistList, { Artist } from "./ArtistList";

export default function TimeTable() {
  const [selectedDay, setSelectedDay] = useState<"DAY 2" | "DAY 3">("DAY 2");
  const [selectedArtist, setSelectedArtist] = useState<null | Artist>(null);
  const filteredList = artistList.filter((artist) => artist.date === selectedDay);

  return (
    <TimeTableWrapper>
      <NavWrapper>
        <NavBtn selected={selectedDay === "DAY 2"} onClick={() => setSelectedDay("DAY 2")}>
          <p className="en">DAY 2</p>
          <p className="ko">5월 8일 (목)</p>
        </NavBtn>
        <NavBtn selected={selectedDay === "DAY 3"} onClick={() => setSelectedDay("DAY 3")}>
          <p className="en">DAY 3</p>
          <p className="ko">5월 9일 (금)</p>
        </NavBtn>
      </NavWrapper>

      {filteredList.map((artist, index) => (
        <TimeTableCard
          key={index}
          time={artist.time}
          description={artist.description}
          name={artist.name}
          image={artist.image}
          onClick={() => setSelectedArtist(artist)}
        />
      ))}
      {selectedArtist && (
        <TimeTableModal artist={selectedArtist} onClose={() => setSelectedArtist(null)} />
      )}
    </TimeTableWrapper>
  );
}

export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const NavBtn = styled.button<{ selected: boolean }>`
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
  font-weight: 600;
  font-size: 10px;
  cursor: pointer;

  & > .en {
    font-size: 14px;
  }

  & > .ko {
    font-size: 10px;
  }
`;
