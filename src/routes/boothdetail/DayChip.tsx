import styled from "@emotion/styled";
import Sun from "@icon/sun.svg?react";
import { useTranslation } from "react-i18next";

const DayChip = () => {
  const { t } = useTranslation("booth");

  return (
    <Chip>
      <Sun />
      <ChipText>{t("day_booth")}</ChipText>
      <Time>~ 16:30</Time>
    </Chip>
  );
};

const Chip = styled.div`
  padding-inline: 8px;
  padding-block: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: #fff;
  border: 0.5px solid #4aa4ff;
`;

const ChipText = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
`;

const Time = styled.span`
  color: #a9a9a9;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.175px;
`;

export default DayChip;
