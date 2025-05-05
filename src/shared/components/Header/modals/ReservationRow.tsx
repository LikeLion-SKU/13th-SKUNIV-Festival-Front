import styled from "@emotion/styled";
import useReservationStore from "../../../stores/useReservationStore";

import Checked from "@icon/checked.svg?react";
import Unchecked from "@icon/unchecked.svg?react";

interface WaitingRowProps {
  boothId: number;
  boothName: string;
  headCount: number;
  waitingTeam: number;
}

const ReservationRow = ({ boothId, boothName, headCount, waitingTeam }: WaitingRowProps) => {
  const { idsToDelete, addIdToDelete, cancelIdToDelete } = useReservationStore();

  return (
    <Wrapper>
      <Name>{boothName}</Name>
      <Divider />
      <HeadCount>{headCount}명</HeadCount>
      <Divider />
      <WaitingTeam>대기팀 {waitingTeam}팀</WaitingTeam>
      <CheckButton>
        {idsToDelete?.some((c) => boothId === c.boothId) ? (
          <Checked width={16} height={16} onClick={() => cancelIdToDelete(boothId)} />
        ) : (
          <Unchecked width={16} height={16} onClick={() => addIdToDelete(boothId, boothName)} />
        )}
      </CheckButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid #cdcdcd;
`;

const Name = styled.span`
  color: #1a1a1a;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.35px;
  white-space: nowrap;
`;

const Divider = styled.hr`
  width: 1px;
  height: 14px;
  background: #d8d8d8;
`;

const WaitingTeam = styled.span`
  color: #7d7d7d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

const HeadCount = styled.span`
  color: #7d7d7d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

const CheckButton = styled.button`
  all: unset;
  margin-left: auto;
  flex-shrink: 0;
  cursor: pointer;
`;

export default ReservationRow;
