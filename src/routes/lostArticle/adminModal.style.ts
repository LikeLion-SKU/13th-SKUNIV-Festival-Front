import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  width: 329px;
  height: 259px;
  background: #f8f8f8;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.665px; /* 136.103% */
  letter-spacing: -0.6px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.p`
  color: #7d7d7d;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  margin-bottom: 26px;
`;

export const InputWrapper = styled.div`
  background-color: #e4e4e4;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 8px 30px;
  gap: 8px;
  margin-bottom: 26px;

  svg {
    color: #666;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  input {
    border: none;
    background: transparent;
    flex: 1;
    font-size: 16px;
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  button {
    flex: 1;
    width: 129px;
    height: 35px;
    padding: 8.845px 22.112px;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }

  .cancel {
    border: 1.5px solid rgba(227, 227, 227, 0.81);
    color: var(--Font-05_Gray_Disabled, #999);
    background-color: #f8f8f8;
  }

  .login {
    background: #4aa3ff;
    color: white;
  }
`;
