import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

interface BoothMapProps {
  selectedLocation: string | null;
  setSelectedLocation: (building: string) => void;
  filteredBooths: { id: number; boothFaculty: string }[];
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

  const { t } = useTranslation("booth");

  const dots = [
    { belongTo: "청운관", top: 106, left: 63, boothFaculty: "미래융합대학", id: 26 },
    { belongTo: "청운관", top: 123, left: 63, boothFaculty: "인문과학대학", id: 4 },
    { belongTo: "청운관", top: 140, left: 63, boothFaculty: "사회과학대학", id: 16 },
    { belongTo: "청운관", top: 157, left: 63, boothFaculty: "이공대학", id: 29 },
    { belongTo: "청운관", top: 174, left: 63, boothFaculty: "일어전공", id: 6 },
    { belongTo: "대일관", top: 200, left: 63, boothFaculty: "불어전공", id: 3 },
    { belongTo: "대일관", top: 217, left: 63, boothFaculty: "중어전공", id: 1 },
    { belongTo: "대일관", top: 234, left: 63, boothFaculty: "토목건축공학과", id: 23 },
    { belongTo: "대일관", top: 251, left: 63, boothFaculty: "전자컴퓨터공학과", id: 8 },
    { belongTo: "대일관", top: 268, left: 63, boothFaculty: "금융정보학과", id: 2 },
    { belongTo: "대일관", top: 285, left: 63, boothFaculty: "물류시스템공학과", id: 13 },
    { belongTo: "혜인관", top: 80, left: 75, boothFaculty: "총학생회", id: 30 },
    { belongTo: "혜인관", top: 80, left: 92, boothFaculty: "총학생회", id: 30 },
    { belongTo: "혜인관", top: 80, left: 234, boothFaculty: "신문사", id: 25 },
    { belongTo: "혜인관", top: 80, left: 251, boothFaculty: "총동아리연합회", id: 14 },
    { belongTo: "은주2관", top: 110, left: 263, boothFaculty: "예술대학", id: 27 },
    { belongTo: "은주2관", top: 127, left: 263, boothFaculty: "미용예술대학", id: 20 },
    { belongTo: "은주2관", top: 144, left: 263, boothFaculty: "디자인학부", id: 12 },
    {
      belongTo: "은주2관",
      top: 161,
      left: 263,
      boothFaculty: "스포츠앤<br>테크놀로지학과",
      id: 21,
    },
    { belongTo: "은주2관", top: 178, left: 263, boothFaculty: "아트앤<br>테크놀로지학과", id: 24 },
    { belongTo: "은주2관", top: 195, left: 263, boothFaculty: "광고홍보영상학과", id: 19 },
    { belongTo: "은주2관", top: 212, left: 263, boothFaculty: "실용음악학부", id: 22 },
    { belongTo: "은주2관", top: 229, left: 263, boothFaculty: "공공인재학부", id: 9 },
    { belongTo: "은주1관", top: 243, left: 140, boothFaculty: "나노화학<br>생명공학과", id: 5 },
    { belongTo: "은주1관", top: 243, left: 157, boothFaculty: "도시공학과", id: 15 },
    { belongTo: "은주1관", top: 243, left: 174, boothFaculty: "소프트웨어학과", id: 11 },
    { belongTo: "은주1관", top: 243, left: 191, boothFaculty: "군사학과", id: 7 },
    { belongTo: "은주1관", top: 243, left: 208, boothFaculty: "아동청소년학과", id: 10 },
    { belongTo: "은주1관", top: 243, left: 225, boothFaculty: "경영학부", id: 28 },
  ];

  return (
    <MapWrapper>
      <Building
        className="di"
        selected={selectedLocation === t("daeil_hall")}
        disabled={isSearching}
        onClick={() => handleBuildingClick(t("daeil_hall"))}
      >
        {t("daeil_hall")}
      </Building>

      <Building
        className="cw"
        selected={selectedLocation === t("cheongun_hall")}
        disabled={isSearching}
        onClick={() => handleBuildingClick(t("cheongun_hall"))}
      >
        {t("cheongun_hall")}
      </Building>

      <Building
        className="he"
        selected={selectedLocation === t("hyein_hall")}
        disabled={isSearching}
        onClick={() => handleBuildingClick(t("hyein_hall"))}
      >
        {t("hyein_hall")}
      </Building>

      <Building
        className="ej1"
        selected={selectedLocation === t("eunju_hall_1")}
        disabled={isSearching}
        onClick={() => handleBuildingClick(t("eunju_hall_1"))}
      >
        {t("eunju_hall_1")}
      </Building>

      <Building
        className="ej2"
        selected={selectedLocation === t("eunju_hall_2")}
        disabled={isSearching}
        onClick={() => handleBuildingClick(t("eunju_hall_2"))}
      >
        {t("eunju_hall_2")}
      </Building>

      {dots.map((d, index) => {
        const isActive = filteredBooths.some((booth) => booth.id === d.id);
        return <Dot key={index} style={{ top: d.top, left: d.left }} active={isActive} />;
      })}

      <Stage>{t("stage")}</Stage>
      <StudentZone>{t("student_zone")}</StudentZone>
      <SmokeZone>{t("smoking_booth")}</SmokeZone>
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
  padding: 8px;
  text-align: center;
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
  padding: 8px;
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
  padding: 8px;
`;

const SmokeZone = styled.div`
  position: absolute;
  top: 18px;
  left: 2px;
  width: 52px;
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
  text-align: center;
  padding: 5px;
`;
