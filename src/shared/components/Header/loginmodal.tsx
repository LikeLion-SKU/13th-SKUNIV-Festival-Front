import styled from "@emotion/styled";
import useAdminStore from "../../stores/useAdminStore";
import Modal from "../Modal";
import Lock from "@icon/lock.svg?react";
import { useState } from "react";

const LoginModal = () => {
  const { onClose } = useAdminStore();

  const [password, setPassword] = useState("");

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
          action: () => {},
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>관리자 로그인</Title>
        <Subtitle>디자인학부 부스</Subtitle>
        <InputWrapper>
          <InputIcon />
          <Input
            type="password"
            placeholder="비밀번호 입력"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </InputWrapper>
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

const InputWrapper = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  background: #e4e4e4;
  border-radius: 20px;
`;

const InputIcon = styled(Lock)`
  margin-right: 20px;
`;

const Input = styled.input`
  all: unset;
  font-size: 12px;
  color: #000;
  &::placeholder {
    color: #9d9d9d;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default LoginModal;
