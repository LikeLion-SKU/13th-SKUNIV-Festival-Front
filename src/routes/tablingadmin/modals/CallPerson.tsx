import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useAdminStore from "../../../shared/stores/useAdminStore";
import useHeaderStore from "../../../shared/stores/useHeaderStore";
import { adminAPI } from "../../../shared/lib/api";

const CallPerson = () => {
  const { setModalStep, onClose, phoneNum, name } = useAdminStore();
  const { title } = useHeaderStore();

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
          action: async () => {
            // 호출
            try {
              const response = await adminAPI.post("/reservations/admin/call", {
                name: title,
                phoneNum,
                message: `${title} 부스에서 호출되었습니다.`,
              });

              if (response.data?.success) {
                setModalStep(3);
              }
            } catch (err) {
              alert("호출에 실패하였습니다.");
            }
          },
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Faculty>{title} 부스</Faculty>
        <Message>{name}님을 호출하시겠습니까?</Message>
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
