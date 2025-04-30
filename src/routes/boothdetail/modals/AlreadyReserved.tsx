import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";
import styled from "@emotion/styled";
import Error from "../../../shared/assets/lottie/error.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";

const AlreadyReserved = () => {
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
      <AlreadyLayout>
        <DotLottiePlayer src={Error} autoplay loop style={{ width: "100px", height: "100px" }} />
        <Message>이미 예약한 부스입니다.</Message>
      </AlreadyLayout>
    </Modal>
  );
};

const AlreadyLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.665px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

export default AlreadyReserved;
