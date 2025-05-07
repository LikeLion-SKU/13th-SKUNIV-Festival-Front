import styled from "@emotion/styled";
import useReservationStore from "../../../stores/useReservationStore";

import Checked from "@icon/checked.svg?react";
import Unchecked from "@icon/unchecked.svg?react";
import { useTranslation } from "react-i18next";

interface WaitingRowProps {
  boothId: number;
  boothFaculty: string;
  headCount: number;
  waitingTeam: number;
}

const ReservationRow = ({ boothId, boothFaculty, headCount, waitingTeam }: WaitingRowProps) => {
  const { idsToDelete, addIdToDelete, cancelIdToDelete } = useReservationStore();

  const { t } = useTranslation("ui");

  return (
    <Wrapper>
      <Name>{boothFaculty.replace("<br>", "")}</Name>
      <Divider />
      <HeadCount>{t("reservation_count", { headCount })}</HeadCount>
      <Divider />
      <WaitingTeam>{t("reservation_waitings", { waitingTeam })}</WaitingTeam>
      <CheckButton>
        {idsToDelete?.some((c) => boothId === c.boothId) ? (
          <Checked width={16} height={16} onClick={() => cancelIdToDelete(boothId)} />
        ) : (
          <Unchecked width={16} height={16} onClick={() => addIdToDelete(boothId, boothFaculty)} />
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
