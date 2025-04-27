import { useState } from "react";
import { ModalBackdrop, ConfirmModal, ModalIcon, ModalTitle, ModalButton, ModalButtonGroup } from "./modals.style";
import { FiTrash2 } from "react-icons/fi";
import { deleteLostItem } from "./lostArticleAPI";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
  itemId: number;
}

const ConfirmDeleteModal = ({ onCancel, onConfirm, itemId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      // 삭제 API 호출
      const result = await deleteLostItem(itemId);
      if (result) {
        onConfirm();  // 삭제 성공 후 onConfirm 호출 (모달 닫기)
      } else {
        setError("삭제에 실패했습니다. 다시 시도해주세요."); // 실패 시 에러 메시지
      }
    } catch (err) {
      setError("삭제에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalBackdrop onClick={onCancel}>
      <ConfirmModal onClick={(e) => e.stopPropagation()}>
        <ModalIcon>
          <FiTrash2 size={34} color="#FF6370" />
        </ModalIcon>
        <ModalTitle>삭제하시겠습니까?</ModalTitle>
        {error && <div style={{ color: "red" }}>{error}</div>} {/* 에러 메시지 표시 */}
        <ModalButtonGroup>
          <ModalButton onClick={onCancel}>취소</ModalButton>
          <ModalButton
            color="#fff"
            background="#FF6370"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "삭제 중..." : "삭제하기"}
          </ModalButton>
        </ModalButtonGroup>
      </ConfirmModal>
    </ModalBackdrop>
  );
};

export default ConfirmDeleteModal;
