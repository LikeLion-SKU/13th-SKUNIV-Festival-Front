import { useState } from "react";
import {
  StyledImage,
  SubText,
  CardWrapper,
  Location,
  DateText,
  Title,
  CheckIcon,
  Overlay,
} from "./card.style";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import { useAdminStore } from "../../stores/useAdminStore";
import CardActionModal from "./cardActionModal";
import ConfirmDeleteModal from "./deleteConfirmModal";
import SuccessModal from "./deleteSuccessModal";
import PickupModal from "./pickupModal";

interface CardProps {
  location: string;
  date: string;
  title: string;
  imageUrl: string;
  returned: boolean;
  id: number;
}

const Card = ({ location, date, title, imageUrl, returned, id }: CardProps) => {
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn);

  const [activeModal, setActiveModal] = useState<
    "action" | "confirm" | "success" | "pickup" | null
  >(null);
  const [isPickedUp, setIsPickedUp] = useState(returned); // 초기값으로 'returned' 상태를 사용

  const handleCardClick = () => {
    if (isLoggedIn) setActiveModal("action");
  };

  const handleDelete = () => {
    setActiveModal(null);
    setActiveModal("confirm");
  };

  const handleConfirmDelete = () => {
    setActiveModal("success");
  };

  const handleCheckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveModal("pickup");
  };

  const handleConfirmPickup = (isPicked: boolean) => {
    setActiveModal(null);
    setIsPickedUp(isPicked); // 주인이 찾았다고 상태 변경
  };

  return (
    <>
      <CardWrapper onClick={handleCardClick}>
        <StyledImage src={imageUrl} alt={title} />
        <Overlay />

        {isLoggedIn && (
          <CheckIcon onClick={handleCheckClick}>
            {isPickedUp ? (
              <FiCheckSquare size={20} color="#2D9CDB" /> // 체크된 아이콘
            ) : (
              <FiSquare size={20} color="#2D9CDB" /> // 체크되지 않은 아이콘
            )}
          </CheckIcon>
        )}
        <Location>
          <SubText>습득위치</SubText>
          <DateText>{location}</DateText>
        </Location>
        <Location>
          <DateText>{date}</DateText>
          <Title>{title}</Title>
        </Location>
      </CardWrapper>

      {activeModal === "action" && (
        <CardActionModal
          id={id} // id를 전달
          onClose={() => setActiveModal(null)}
          onDelete={handleDelete}
        />
      )}

      {activeModal === "confirm" && (
        <ConfirmDeleteModal
          itemId={id}
          onCancel={() => setActiveModal(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {activeModal === "success" && <SuccessModal onClose={() => setActiveModal(null)} />}

      {activeModal === "pickup" && (
        <PickupModal
          itemId={id}
          onCancel={() => setActiveModal(null)}
          onConfirm={handleConfirmPickup}
        />
      )}
    </>
  );
};

export default Card;
