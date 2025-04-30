import { FiLock } from 'react-icons/fi';
import { Backdrop, ModalContainer, Title, Subtitle, InputWrapper, ButtonGroup } from './adminModal.style';

interface Props {
  onClose: () => void;
  onSubmit: (password: string) => void;
  password: string;
  setPassword: (v: string) => void;
}

const AdminModal = ({ onClose, onSubmit, password, setPassword }: Props) => {
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
          <button className="cancel" onClick={onClose}>닫기</button>
          <button className="login" onClick={() => onSubmit(password)}>로그인</button>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default AdminModal;