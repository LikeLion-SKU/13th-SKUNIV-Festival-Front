import { DotLottiePlayer } from "@dotlottie/react-player";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import CrossX from "../../../assets/lottie/cross-x.lottie";

const ReservationNotFound = () => {
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
        <DotLottiePlayer src={CrossX} autoplay style={{ width: "80px", height: "80px" }} />
        <Message>예약 정보가 없습니다.</Message>
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

export default ReservationNotFound;
