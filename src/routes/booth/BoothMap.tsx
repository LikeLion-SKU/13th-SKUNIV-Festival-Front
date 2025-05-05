import styled from "@emotion/styled";
import Smoke from "@icon/smoke.svg?react";

const dots = [
  { belongTo: "청운관", top: 106, left: 63, boothFaculty: "미래융합대학" },
  { belongTo: "청운관", top: 123, left: 63, boothFaculty: "인문과학대학" },
  { belongTo: "청운관", top: 140, left: 63, boothFaculty: "사회과학대학" },
  { belongTo: "청운관", top: 157, left: 63, boothFaculty: "이공대학" },
  { belongTo: "청운관", top: 174, left: 63, boothFaculty: "일어전공" },
  { belongTo: "대일관", top: 200, left: 63, boothFaculty: "불어전공" },
  { belongTo: "대일관", top: 217, left: 63, boothFaculty: "중어전공" },
  { belongTo: "대일관", top: 234, left: 63, boothFaculty: "토목건축공학과" },
  { belongTo: "대일관", top: 251, left: 63, boothFaculty: "전자컴퓨터공학과" },
  { belongTo: "대일관", top: 268, left: 63, boothFaculty: "금융정보학과" },
  { belongTo: "대일관", top: 285, left: 63, boothFaculty: "물류시스템공학과" },
  { belongTo: "혜인관", top: 80, left: 63, boothFaculty: "총학생회" },
  { belongTo: "혜인관", top: 80, left: 80, boothFaculty: "총학생회" },
  { belongTo: "혜인관", top: 80, left: 97, boothFaculty: "투엠" },
  { belongTo: "혜인관", top: 80, left: 229, boothFaculty: "신문사" },
  { belongTo: "혜인관", top: 80, left: 246, boothFaculty: "총동아리연합회" },
  { belongTo: "혜인관", top: 80, left: 263, boothFaculty: "예교원" },
  { belongTo: "은주2관", top: 110, left: 263, boothFaculty: "예술대학" },
  { belongTo: "은주2관", top: 127, left: 263, boothFaculty: "미용예술대학" },
  { belongTo: "은주2관", top: 144, left: 263, boothFaculty: "디자인학부" },
  { belongTo: "은주2관", top: 161, left: 263, boothFaculty: "스포츠앤<br>테크놀로지학과" },
  { belongTo: "은주2관", top: 178, left: 263, boothFaculty: "아트앤<br>테크놀로지학과" },
  { belongTo: "은주2관", top: 195, left: 263, boothFaculty: "광고홍보영상학과" },
  { belongTo: "은주2관", top: 212, left: 263, boothFaculty: "실용음악학부" },
  { belongTo: "은주2관", top: 229, left: 263, boothFaculty: "공공인재학부" },
  { belongTo: "은주1관", top: 243, left: 140, boothFaculty: "나노화학<br>생명공학과" },
  { belongTo: "은주1관", top: 243, left: 157, boothFaculty: "도시공학과" },
  { belongTo: "은주1관", top: 243, left: 174, boothFaculty: "소프트웨어학과" },
  { belongTo: "은주1관", top: 243, left: 191, boothFaculty: "군사학과" },
  { belongTo: "은주1관", top: 243, left: 208, boothFaculty: "아동청소년학과" },
  { belongTo: "은주1관", top: 243, left: 225, boothFaculty: "경영학부" },
];

interface BoothMapProps {
  selectedLocation: string | null;
  setSelectedLocation: (building: string) => void;
  filteredBooths: { boothFaculty: string }[];
  isSearching: boolean;
}

export default function BoothMap({
  selectedLocation,
  setSelectedLocation,
  filteredBooths,
  isSearching,
}: BoothMapProps) {
  const handleBuildingClick = (building: string) => {
    if (isSearching) return;
    setSelectedLocation(building);
  };

  return (
    <MapWrapper>
      <Building
        className="di"
        selected={selectedLocation === "대일관"}
        disabled={isSearching}
        onClick={() => handleBuildingClick("대일관")}
      >
        대일관
      </Building>

      <Building
        className="cw"
        selected={selectedLocation === "청운관"}
        disabled={isSearching}
        onClick={() => handleBuildingClick("청운관")}
      >
        청운관
      </Building>

      <Building
        className="he"
        selected={selectedLocation === "혜인관"}
        disabled={isSearching}
        onClick={() => handleBuildingClick("혜인관")}
      >
        혜인관
      </Building>

      <Building
        className="ej1"
        selected={selectedLocation === "은주1관"}
        disabled={isSearching}
        onClick={() => handleBuildingClick("은주1관")}
      >
        은주1관
      </Building>

      <Building
        className="ej2"
        selected={selectedLocation === "은주2관"}
        disabled={isSearching}
        onClick={() => handleBuildingClick("은주2관")}
      >
        은주2관
      </Building>

      {dots.map((d, index) => {
        const isActive = filteredBooths.some((booth) => booth.boothFaculty === d.boothFaculty);
        return <Dot key={index} style={{ top: d.top, left: d.left }} active={isActive} />;
      })}

      <Stage>무대</Stage>
      <StudentZone>재학생존</StudentZone>
      <SmokeZone>
        <Smoke />
      </SmokeZone>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 330px;
  border-bottom: 2px solid #ebeaea;
  margin-bottom: 28px;
`;

const Building = styled.div<{ selected: boolean; disabled: boolean }>`
  position: absolute;
  background-color: ${({ disabled, selected }) =>
    disabled ? "#C6E2FF" : selected ? "#4AA3FF" : "#C6E2FF"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.275px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &.di {
    top: 190px;
    left: 2px;
    width: 52px;
    height: 116px;
  }

  &.cw {
    top: 70px;
    left: 2px;
    width: 52px;
    height: 116px;
  }

  &.he {
    top: 18px;
    left: 58px;
    width: 224px;
    height: 48px;
  }

  &.ej1 {
    top: 263px;
    left: 115px;
    width: 165px;
    height: 43px;
  }

  &.ej2 {
    top: 70px;
    left: 285px;
    width: 52px;
    height: 236px;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  position: absolute;
  width: 13px;
  height: 13px;
  background-color: ${({ active }) => (active ? "#FF6783" : "#686868")};
  border-radius: 50%;
`;

const Stage = styled.div`
  position: absolute;
  top: 72px;
  left: 116px;
  width: 108px;
  height: 27px;
  background-color: #686868;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.275px;
`;

const StudentZone = styled.div`
  position: absolute;
  top: 104px;
  left: 116px;
  width: 108px;
  height: 70px;
  background-color: #b9b9b9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.275px;
`;

const SmokeZone = styled.div`
  position: absolute;
  top: 18px;
  left: 29px;
  width: 24px;
  height: 48px;
  background-color: #b9b9b9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.275px;
`;
