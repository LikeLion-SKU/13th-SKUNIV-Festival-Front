import styled from "@emotion/styled";
import Sun from "@icon/sun.svg?react";

const DayChip = () => {
  return (
    <Chip>
      <Sun />
      <ChipText>낮 부스</ChipText>
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

export default DayChip;
