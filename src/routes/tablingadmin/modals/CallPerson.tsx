import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useAdminStore from "../../../shared/stores/useAdminStore";
import useHeaderStore from "../../../shared/stores/useHeaderStore";
import { adminAPI } from "../../../shared/lib/api";
import { useState } from "react";

const CallPerson = () => {
  const { setModalStep, onClose, phoneNum, name } = useAdminStore();
  const { title } = useHeaderStore();

  const [isLoading, setIsLoading] = useState(false);

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
              setIsLoading(true);

              const response = await adminAPI.post("/reservations/admin/call", {
                name: title?.replace("<br>", ""),
                phoneNum,
                message: "부스에서 호출되었습니다.",
              });

              if (response.data?.success) {
                setModalStep(3);
              }
            } catch (err) {
              alert(
                "호출에 실패하였습니다.\n전화번호가 올바르지 않은 경우 호출이 불가능할 수 있습니다.\n문제가 지속적으로 발생 시 멋사 카톡 채널로 문의해주시기 바랍니다."
              );
            } finally {
              setIsLoading(false);
            }
          },
          loading: isLoading,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Faculty>{title?.replace("<br>", "")} 부스</Faculty>
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
