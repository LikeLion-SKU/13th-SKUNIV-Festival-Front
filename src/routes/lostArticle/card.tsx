import { useState } from "react";
import { SubText, CardWrapper, Location, DateText, Title, CheckIcon, Overlay } from "./card.style";
import { FiCheckCircle, FiCheck } from "react-icons/fi";
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
}

const Card = ({ location, date, title, imageUrl, returned }: CardProps) => {
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn);

  const [activeModal, setActiveModal] = useState<"action" | "confirm" | "success" | "pickup" | null>(null);
  const [isPickedUp, setIsPickedUp] = useState(false);

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

  const handleConfirmPickup = () => {
    setActiveModal(null);
    setIsPickedUp(true);
  };

  return (
    <>
      <CardWrapper onClick={handleCardClick}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <Overlay />

        {isLoggedIn && (
          <CheckIcon onClick={handleCheckClick}>
            {isPickedUp ? (
              <FiCheck size={20} color="#2D9CDB" />
            ) : (
              <FiCheckCircle size={20} color="#2D9CDB" />
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
          onClose={() => setActiveModal(null)}
          onEdit={() => alert("수정 기능은 추후 구현")}
          onDelete={handleDelete}
        />
      )}

      {activeModal === "confirm" && (
        <ConfirmDeleteModal
          onCancel={() => setActiveModal(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {activeModal === "success" && <SuccessModal onClose={() => setActiveModal(null)} />}

      {activeModal === "pickup" && (
        <PickupModal
          onCancel={() => setActiveModal(null)}
          onConfirm={handleConfirmPickup}
        />
      )}
    </>
  );
};

export default Card;
