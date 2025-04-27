import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useAdminStore from "../../../shared/stores/useAdminStore";

const CallPerson = () => {
  const { setModalStep, onClose } = useAdminStore();

  return (
    <Modal
      actions={[
        {
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
        {
          title: "호출하기",
          variant: "confirm",
          action: () => {
            // 호출
            setModalStep(3);
          },
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Faculty>디자인학부 부스</Faculty>
        <Message>나윤주님을 호출하시겠습니까?</Message>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Faculty = styled.span`
  color: #a3a3a3;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Message = styled.span`
  margin-top: 6px;
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.665px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

export default CallPerson;
