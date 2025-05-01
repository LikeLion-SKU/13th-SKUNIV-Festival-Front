import axios from "axios";
import { publicAPI } from "../../../lib/api";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import Trash from "@icon/trash.svg?react";

const ReservationCancel = () => {
  const { onClose, idsToDelete, setReservation, name, phoneNum, setModalStep } =
    useReservationStore();

  async function cancel() {
    const isFulfilled = await axios
      .all(
        idsToDelete.map((r) =>
          publicAPI.delete(`/reservations/${r.boothName}`, { data: { name, phoneNum } })
        )
      )
      .then(
        axios.spread((...responses) =>
          responses.every((response) => response.data?.success === true)
        )
      )
      .catch(() => alert("오류가 발생하였습니다."));

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
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
        {
          title: "예약 취소",
          variant: "destructive",
          action: cancel,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Trash />
        <Title>
          {idsToDelete.length > 1 ? "예약을 모두 취소하시겠습니까?" : "예약을 취소하시겠습니까?"}
        </Title>
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
`;

export default ReservationCancel;
