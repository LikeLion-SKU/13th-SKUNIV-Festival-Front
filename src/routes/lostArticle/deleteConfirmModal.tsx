import {
  ModalBackdrop,
  ConfirmModal,
  ModalIcon,
  ModalTitle,
  ModalButton,
  ModalButtonGroup,
} from "./modals.style";
import { FiTrash2 } from "react-icons/fi";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <ModalBackdrop onClick={onCancel}>
      <ConfirmModal onClick={(e) => e.stopPropagation()}>
        <ModalIcon>
          <FiTrash2 size={34} color="#FF6370" />
        </ModalIcon>
        <ModalTitle>삭제하시겠습니까?</ModalTitle>
        <ModalButtonGroup>
          <ModalButton onClick={onCancel}>취소</ModalButton>
          <ModalButton color="#fff" background="#FF6370" onClick={onConfirm}>
            삭제하기
          </ModalButton>
        </ModalButtonGroup>
      </ConfirmModal>
    </ModalBackdrop>
  );
};

export default ConfirmDeleteModal;
