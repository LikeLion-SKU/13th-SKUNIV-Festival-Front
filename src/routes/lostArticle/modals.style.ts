import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionModal = styled.div`
  background: #f8f8f8;
  border-radius: 20px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 329px;
  height: 200px;
`;

export const ConfirmModal = styled(ActionModal)`
  align-items: center;
  gap: 0px;
  padding: 20px;
`;

export const SuccessModal = styled(ConfirmModal)`
  padding: 30px 20px;
  gap: 20px;
`;

export const ModalIcon = styled.div`
  margin-bottom: 12px;
  margin-top: 15px;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ModalButton = styled.button<{
  background?: string;
  color?: string;
}>`
  flex: 1;
  width: 129px;
  height: 35px;
  padding: 8.845px 22.112px;
  justify-content: center;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  background: ${({ background }) => background || "#f0f0f0"};
  color: ${({ color }) => color || "#333"};
  border: none;
  cursor: pointer;
`;

export const ModalBigButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: "#f0f0f0";
  color: "#333";
  border: none;
  cursor: pointer;
`;

export const ModalSubtitle = styled.p`
  color: #919191;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: -0.25px;
`;

export const PickUpIcon = styled.div`
  margin-top: -3px;
`;
