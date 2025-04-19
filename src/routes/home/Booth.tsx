import styled from "styled-components";
import BoothCard from "./BoothCard";
import boothImg from "@image/booth_sample.png";

export const BoothWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;

export default function Booth() {
  const boothList = [
    {
      department: "컴퓨터공학과",
      location: "청운관 좌측",
      image: boothImg,
    },
    {
      department: "디자인학부",
      location: "혜인관 좌측",
      image: boothImg,
    },
    {
      department: "소프트웨어학과",
      location: "청운관 우측",
      image: boothImg,
    },
    {
      department: "경영학과",
      location: "청운관 중앙",
      image: boothImg,
    },
  ];

  return (
    <BoothWrapper>
      {boothList.map((booth, index) => (
        <BoothCard
          key={index}
          department={booth.department}
          location={booth.location}
          image={booth.image}
        />
      ))}
    </BoothWrapper>
  );
}
