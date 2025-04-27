import {
  ModalBackdrop,
  SuccessModal as StyledSuccessModal,
  ModalIcon,
  ModalTitle,
} from "./modals.style";
import { FiCheck } from "react-icons/fi";

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  const handleCloseAndRefresh = () => {
    onClose();
    window.location.reload();
  };

  return (
    <ModalBackdrop onClick={handleCloseAndRefresh}>
      <StyledSuccessModal onClick={(e) => e.stopPropagation()}>
        <ModalIcon>
          <FiCheck size={48} color="#2D9CDB" />
        </ModalIcon>
        <ModalTitle>삭제가 완료되었습니다.</ModalTitle>
      </StyledSuccessModal>
    </ModalBackdrop>
  );
};

export default SuccessModal;
