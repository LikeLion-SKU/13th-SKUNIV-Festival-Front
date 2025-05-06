import { useState } from "react";
import { FiLock } from "react-icons/fi";
import {
  Backdrop,
  ModalContainer,
  Title,
  Subtitle,
  InputWrapper,
  ButtonGroup,
} from "./adminModal.style";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

const AdminModal = ({ onClose, onSuccess }: Props) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "0730") {
      onSuccess();
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Title>관리자 비밀번호</Title>
        <Subtitle>총학생회 한빛</Subtitle>
        <InputWrapper>
          <FiLock />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
          />
        </InputWrapper>
        <ButtonGroup>
          <button className="cancel" onClick={onClose}>
            닫기
          </button>
          <button className="login" onClick={handleLogin}>
            로그인
          </button>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default AdminModal;
