import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";

const ReservationComplete = () => {
  const { onClose, waitingOrder, setModalStep } = useReservationStore();

  return (
    <Modal
      actions={[
        {
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
        {
          title: "예약 확인",
          variant: "confirm",
          action: () => setModalStep(5),
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>예약이 완료되었습니다.</Title>
        <Waiting>내 대기 순서</Waiting>
        <WaitingNumber>{waitingOrder}번째</WaitingNumber>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32.665px;
  letter-spacing: -0.5px;
`;

const Waiting = styled.span`
  margin-top: 8px;
  color: #2e2e2e;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.665px;
  letter-spacing: -0.375px;
`;

const WaitingNumber = styled.span`
  color: #4aa4ff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32.665px;
  letter-spacing: -0.8px;
`;

export default ReservationComplete;
