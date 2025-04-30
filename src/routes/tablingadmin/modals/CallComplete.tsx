import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useAdminStore from "../../../shared/stores/useAdminStore";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Paper from "../../../shared/assets/lottie/paper.lottie";
import useHeaderStore from "../../../shared/stores/useHeaderStore";
import { useQueryClient } from "@tanstack/react-query";

const CallComplete = () => {
  const { onClose } = useAdminStore();
  const { title } = useHeaderStore();
  const queryClient = useQueryClient();

  return (
    <Modal
      actions={[
        {
          title: "확인",
          variant: "confirm",
          action: () => {
            queryClient.invalidateQueries({
              queryKey: ["adminReservations", title],
            });
            queryClient.invalidateQueries({
              queryKey: ["adminBoothWaitings", title],
            });
            onClose();
          },
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Faculty>{title} 부스</Faculty>
        <DotLottiePlayer
          src={Paper}
          autoplay
          loop
          style={{ marginTop: "8px", width: "100px", height: "100px" }}
        />
        <Message>호출이 완료되었습니다.</Message>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Faculty = styled.span`
  color: #aaa;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Message = styled.span`
  margin-top: 4px;
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.665px;
  letter-spacing: -0.5px;
`;

export default CallComplete;
