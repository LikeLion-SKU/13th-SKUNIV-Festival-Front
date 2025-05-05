import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

interface Props {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

export default function LocNav({ selectedLocation, setSelectedLocation }: Props) {
  const { t } = useTranslation("booth");

  const locations = [
    t("hyein_hall"),
    t("eunju_hall_1"),
    t("eunju_hall_2"),
    t("cheongun_hall"),
    t("daeil_hall"),
  ];

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
  gap: 10px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

const NavBtn = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 57px;
  padding: 5px 10px;
  border: 1.3px solid #4aa4ff;
  background-color: ${(props) => (props.selected ? "#4AA4FF" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#4AA4FF")};
  font-weight: 500;
  font-size: 11px;
  border-radius: 50px;
  cursor: pointer;
`;
