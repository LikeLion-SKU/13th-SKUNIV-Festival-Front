import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";
import styled from "@emotion/styled";
import Error from "../../../shared/assets/lottie/error.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useTranslation } from "react-i18next";

const AlreadyReserved = () => {
  const { onClose } = useReservationStore();

  const { t } = useTranslation("ui");

  return (
    <Modal
      actions={[
        {
          title: t("close"),
          variant: "outline",
          action: onClose,
        },
      ]}
      onClose={onClose}
    >
      <AlreadyLayout>
        <DotLottiePlayer src={Error} autoplay loop style={{ width: "100px", height: "100px" }} />
        <Message>{t("reservation_already")}</Message>
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
