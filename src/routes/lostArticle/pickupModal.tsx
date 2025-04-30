import { useState } from "react";
import { ModalBackdrop, ConfirmModal, PickUpIcon, ModalTitle, ModalButtonGroup, ModalButton, ModalSubtitle } from "./modals.style";
import LostIcone from "../../shared/assets/icon/lostIcon.gif";
import { updateLostItemReturnedStatus } from "./lostArticleAPI";

interface Props {
  itemId: number;
  onCancel: () => void;
  onConfirm: (isPicked: boolean) => void; // isPicked 상태를 전달받도록 수정
}

const PickupModal = ({ itemId, onConfirm }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReturnedStatusChange = async (returned: boolean) => {
    setIsLoading(true);
    try {
      await updateLostItemReturnedStatus(itemId, returned);
      onConfirm(returned); // 상태 변경 후 부모 컴포넌트의 onConfirm 호출
    } catch (error) {
      alert("상태 변경에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalBackdrop>
      <ConfirmModal>
        <PickUpIcon>
          <img src={LostIcone} alt="눈 아이콘" width="56px" />
        </PickUpIcon>
        <ModalTitle>주인을 찾았나요..?</ModalTitle>
        <ModalSubtitle>못 찾았으면 내껀데 힝구..아숩당</ModalSubtitle>
        <ModalButtonGroup>
          <ModalButton onClick={() => handleReturnedStatusChange(false)} disabled={isLoading}>
            못찾았다 꾀꼬리
          </ModalButton>
          <ModalButton
            background="#4AA4FF"
            color="#fff"
            onClick={() => handleReturnedStatusChange(true)}
            disabled={isLoading}
          >
            주인이 찾아감
          </ModalButton>
        </ModalButtonGroup>
      </ConfirmModal>
    </ModalBackdrop>
  );
};

export default PickupModal;
