import axios from "axios";
import { publicAPI } from "../../../lib/api";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import Trash from "@icon/trash.svg?react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ReservationCancel = () => {
  const { onClose, idsToDelete, setReservation, name, phoneNum, setModalStep } =
    useReservationStore();

  const { t } = useTranslation("ui");

  const [isLoading, setIsLoading] = useState(false);

  async function cancel() {
    setIsLoading(true);

    const isFulfilled = await axios
      .all(
        idsToDelete.map((r) =>
          publicAPI.delete(`/reservations/${r.boothId}`, { data: { name, phoneNum } })
        )
      )
      .then(
        axios.spread((...responses) =>
          responses.every((response) => response.data?.success === true)
        )
      )
      .catch(() => alert("오류가 발생하였습니다."))
      .finally(() => {
        setIsLoading(false);
      });

    if (isFulfilled) {
      setModalStep(7);
    }

    // 초기화
    setReservation({ idsToDelete: [] });
  }

  return (
    <Modal
      actions={[
        {
          title: t("close"),
          variant: "outline",
          action: onClose,
        },
        {
          title: t("cancel_reservation"),
          variant: "destructive",
          action: cancel,
          loading: isLoading,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Trash />
        <Title>{t("reservation_cancel_confirm", { count: idsToDelete.length })}</Title>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.span`
  color: #1a1a1a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

export default ReservationCancel;
