import { useState } from "react";
import styled from "styled-components";
import BoothCard from "./BoothCard";
import boothImg from "@image/booth_sample.png";

const boothList = [
  {
    department: "컴퓨터공학과",
    location: "유담관 좌측",
    image: boothImg,
  },
  {
    department: "디자인학부",
    location: "유담관 좌측",
    image: boothImg,
  },
  {
    department: "소프트웨어학과",
    location: "은주2관 우측",
    image: boothImg,
  },
  {
    department: "경영학과",
    location: "은주1관 중앙",
    image: boothImg,
  },
  {
    department: "뀨뀨학과",
    location: "청운관 중앙",
    image: boothImg,
  },
  {
    department: "어쩌구학과",
    location: "혜인관 중앙",
    image: boothImg,
  },
];

export default function Booth() {
  const [selectedLocation, setSelectedLocation] = useState<
    "유담관" | "은주1관" | "은주2관" | "청운관" | "혜인관"
  >("유담관");

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.location.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <Wrapper>
      <NavWrapper>
        <NavBtn
          selected={selectedLocation === "유담관"}
          onClick={() => setSelectedLocation("유담관")}
        >
          유담관
        </NavBtn>

        <NavBtn
          selected={selectedLocation === "은주1관"}
          onClick={() => setSelectedLocation("은주1관")}
        >
          은주1관
        </NavBtn>
        <NavBtn
          selected={selectedLocation === "은주2관"}
          onClick={() => setSelectedLocation("은주2관")}
        >
          은주2관
        </NavBtn>
        <NavBtn
          selected={selectedLocation === "청운관"}
          onClick={() => setSelectedLocation("청운관")}
        >
          청운관
        </NavBtn>
        <NavBtn
          selected={selectedLocation === "혜인관"}
          onClick={() => setSelectedLocation("혜인관")}
        >
          혜인관
        </NavBtn>
      </NavWrapper>
      <BoothWrapper>
        {filteredList.map((booth, index) => (
          <BoothCard
            key={index}
            department={booth.department}
            location={booth.location}
            image={booth.image}
          />
        ))}
      </BoothWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoothWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const NavBtn = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 32px;
  border-radius: 10px;
  border: 1.3px solid #fff;
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  color: ${(props) => (props.selected ? "#4AA4FF" : "#fff")};
  font-weight: 500;
  font-size: 11px;
  border-radius: 50px;
  cursor: pointer;
`;
