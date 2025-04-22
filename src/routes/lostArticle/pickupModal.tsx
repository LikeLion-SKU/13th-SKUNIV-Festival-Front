import {
  ModalBackdrop,
  ConfirmModal,
  PickUpIcon,
  ModalTitle,
  ModalButtonGroup,
  ModalButton,
  ModalSubtitle,
} from "./modals.style";
import LostIcone from "../../shared/assets/icon/lostIcon.gif";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

const PickupModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <ModalBackdrop>
      <ConfirmModal>
        <PickUpIcon>
          <img src={LostIcone} alt="눈 아이콘" width="56px"/>
        </PickUpIcon>
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
