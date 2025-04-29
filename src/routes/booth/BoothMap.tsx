import styled from "@emotion/styled";

const dots = [
  { belongTo: "청운관", top: 106, left: 68 },
  { belongTo: "청운관", top: 123, left: 68 },
  { belongTo: "청운관", top: 140, left: 68 },
  { belongTo: "청운관", top: 157, left: 68 },
  { belongTo: "청운관", top: 174, left: 68 },
  { belongTo: "대일관", top: 200, left: 68 },
  { belongTo: "대일관", top: 217, left: 68 },
  { belongTo: "대일관", top: 234, left: 68 },
  { belongTo: "대일관", top: 251, left: 68 },
  { belongTo: "대일관", top: 268, left: 68 },
  { belongTo: "대일관", top: 285, left: 68 },
  { belongTo: "혜인관", top: 80, left: 68 },
  { belongTo: "혜인관", top: 80, left: 85 },
  { belongTo: "혜인관", top: 80, left: 102 },
  { belongTo: "혜인관", top: 80, left: 234 },
  { belongTo: "혜인관", top: 80, left: 251 },
  { belongTo: "혜인관", top: 80, left: 268 },
  { belongTo: "은주2관", top: 110, left: 268 },
  { belongTo: "은주2관", top: 127, left: 268 },
  { belongTo: "은주2관", top: 144, left: 268 },
  { belongTo: "은주2관", top: 161, left: 268 },
  { belongTo: "은주2관", top: 178, left: 268 },
  { belongTo: "은주2관", top: 195, left: 268 },
  { belongTo: "은주2관", top: 212, left: 268 },
  { belongTo: "은주2관", top: 229, left: 268 },
  { belongTo: "은주1관", top: 243, left: 145 },
  { belongTo: "은주1관", top: 243, left: 162 },
  { belongTo: "은주1관", top: 243, left: 179 },
  { belongTo: "은주1관", top: 243, left: 196 },
  { belongTo: "은주1관", top: 243, left: 213 },
  { belongTo: "은주1관", top: 243, left: 230 },
];

interface BoothMapProps {
  selectedLocation: string | null;
  setSelectedLocation: (building: string) => void;
}

export default function BoothMap({ selectedLocation, setSelectedLocation }: BoothMapProps) {
  return (
    <MapWrapper>
      <Building
        className="di"
        selected={selectedLocation === "대일관"}
        onClick={() => setSelectedLocation("대일관")}
      >
        대일관
      </Building>

      <Building
        className="cw"
        selected={selectedLocation === "청운관"}
        onClick={() => setSelectedLocation("청운관")}
      >
        청운관
      </Building>

      <Building
        className="he"
        selected={selectedLocation === "혜인관"}
        onClick={() => setSelectedLocation("혜인관")}
      >
        혜인관
      </Building>

      <Building
        className="ej1"
        selected={selectedLocation === "은주1관"}
        onClick={() => setSelectedLocation("은주1관")}
      >
        은주1관
      </Building>

      <Building
        className="ej2"
        selected={selectedLocation === "은주2관"}
        onClick={() => setSelectedLocation("은주2관")}
      >
        은주2관
      </Building>

      {dots.map((d, index) => (
        <Dot
          key={index}
          style={{ top: d.top, left: d.left }}
          active={selectedLocation === d.belongTo}
        />
      ))}

      <Stage>무대</Stage>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  position: relative;
  height: 330px;
  border-bottom: 2px solid #ebeaea;
  margin-bottom: 28px;
`;

const Building = styled.div<{ selected: boolean }>`
  position: absolute;
  background-color: ${({ selected }) => (selected ? "#4AA3FF" : "#C6E2FF")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.275px;

  &.di {
    top: 190px;
    left: 7px;
    width: 52px;
    height: 116px;
  }

  &.cw {
    top: 70px;
    left: 7px;
    width: 52px;
    height: 116px;
  }

  &.he {
    top: 20px;
    left: 63px;
    width: 224px;
    height: 48px;
  }

  &.ej1 {
    top: 263px;
    left: 120px;
    width: 165px;
    height: 43px;
  }

  &.ej2 {
    top: 70px;
    left: 290px;
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
  top: 75px;
  left: 121px;
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
