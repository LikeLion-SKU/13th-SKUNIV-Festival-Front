import styled from "@emotion/styled";
import Moon from "@icon/moon.svg?react";

const NightChip = () => {
  return (
    <Chip>
      <Moon />
      <ChipText>밤 부스</ChipText>
      <Time>17:00 ~ 23:00</Time>
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
  background: #001d73;
  border: 0.5px solid #4aa4ff;
`;

const ChipText = styled.span`
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
`;

const Time = styled.span`
  color: #dfdfdf;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.175px;
`;

export default NightChip;
