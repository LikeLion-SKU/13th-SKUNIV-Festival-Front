import styled from "@emotion/styled";

interface Props {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

export default function LocNav({ selectedLocation, setSelectedLocation }: Props) {
  const locations = ["혜인관", "은주1관", "은주2관", "청운관", "대일관"];

  return (
    <NavWrapper>
      {locations.map((loc) => (
        <NavBtn
          key={loc}
          selected={selectedLocation === loc}
          onClick={() => setSelectedLocation(loc)}
        >
          {loc}
        </NavBtn>
      ))}
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

const NavBtn = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 32px;
  border: 1.3px solid #4aa4ff;
  background-color: ${(props) => (props.selected ? "#4AA4FF" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#4AA4FF")};
  font-weight: 500;
  font-size: 11px;
  border-radius: 50px;
  cursor: pointer;
`;
