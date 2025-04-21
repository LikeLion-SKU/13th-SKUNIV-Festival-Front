import {
    ModalBackdrop,
    ConfirmModal,
    ModalIcon,
    ModalTitle,
    ModalButtonGroup,
    ModalButton,
    ModalSubtitle,
  } from "./modals.style";
  
  interface Props {
    onCancel: () => void;
    onConfirm: () => void;
  }
  
  const PickupModal = ({ onCancel, onConfirm }: Props) => {
    return (
      <ModalBackdrop>
        <ConfirmModal>
          <ModalIcon>👀</ModalIcon>
          <ModalTitle>주인을 찾았나요..?</ModalTitle>
          <ModalSubtitle>못 찾았으면 내껀데 힝구..아숩당</ModalSubtitle>
          <ModalButtonGroup>
            <ModalButton onClick={onCancel}>못찾았다 꾀꼬리</ModalButton>
            <ModalButton background="#4AA4FF" color="#fff" onClick={onConfirm}>
              주인이 찾아감
            </ModalButton>
          </ModalButtonGroup>
        </ConfirmModal>
      </ModalBackdrop>
    );
  };
  
  export default PickupModal;
  