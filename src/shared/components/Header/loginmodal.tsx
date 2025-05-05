import styled from "@emotion/styled";
import useAdminStore from "../../stores/useAdminStore";
import Modal from "../Modal";
import Lock from "@icon/lock.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useHeaderStore from "../../stores/useHeaderStore";
import { adminAPI } from "../../lib/api";
import { motion, useAnimation } from "framer-motion";

const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  background: #e4e4e4;
  border-radius: 20px;
`;

const MotionInputWrapper = motion(InputWrapper);

const shakingAnimation = {
  x: [-10, 10, -8, 8, -6, 6, -4, 4, -2, 2, 0],
  transition: {
    duration: 0.8,
    ease: "easeInOut",
  },
};

const LoginModal = () => {
  const { title } = useHeaderStore();
  const navigate = useNavigate();
  const { onClose } = useAdminStore();

  const controls = useAnimation();

  const [password, setPassword] = useState("");

  async function Login() {
    try {
      const response = await adminAPI.post("/booths/admin/login", { name: title, password });

      if (response.data.success) {
        onClose();
        navigate(`/tabling/admin/${response.data?.data?.name}/${response.data?.data?.id}`);
      }
    } catch (err) {
      await controls.start(shakingAnimation);
    }
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
          title: "로그인",
          variant: "confirm",
          action: Login,
        },
      ]}
      onClose={onClose}
      backdropClose={false}
    >
      <Layout>
        <Title>관리자 로그인</Title>
        <Subtitle>{title} 부스</Subtitle>
        <MotionInputWrapper initial={{ x: 0 }} animate={controls}>
          <InputIcon />
          <Input
            id="booth_admin_password"
            type="password"
            placeholder="비밀번호 입력"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </MotionInputWrapper>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Title = styled.span`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.665px;
  letter-spacing: -0.6px;
`;

const Subtitle = styled.span`
  margin-top: 4px;
  color: #9d9d9d;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.325px;
`;

const Input = styled.input`
  all: unset;
  padding-inline: 16px;
  text-align: center;
  font-size: 12px;
  color: #000;
  &::placeholder {
    color: #9d9d9d;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const InputIcon = styled(Lock)`
  position: absolute;
`;

export default LoginModal;
