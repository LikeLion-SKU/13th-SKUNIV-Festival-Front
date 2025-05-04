import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Done from ".././../../assets/lottie/done.lottie";

const ReservationCancelComplete = () => {
  const { onClose } = useReservationStore();

  return (
    <Modal
      actions={[
        {
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <DotLottiePlayer src={Done} autoplay style={{ width: "40px", height: "40px" }} />
        <Message>예약이 취소되었습니다.</Message>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.2px;
  white-space: nowrap;
`;

export default ReservationCancelComplete;
