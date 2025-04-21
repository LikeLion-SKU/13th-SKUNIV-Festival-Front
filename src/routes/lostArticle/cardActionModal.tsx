import { ModalBackdrop, ActionModal, ModalBigButton } from "./modals.style";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const CardActionModal = ({ onEdit, onDelete, onClose }: Props) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ActionModal onClick={(e) => e.stopPropagation()}>
        <ModalBigButton onClick={onEdit}>수정</ModalBigButton>
        <ModalBigButton onClick={onDelete}>삭제</ModalBigButton>
      </ActionModal>
    </ModalBackdrop>
  );
};

export default CardActionModal;
