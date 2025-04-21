import { useState } from "react";
import { SubText, CardWrapper, Location, DateText, Title, CheckIcon } from "./card.style";
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
}

const Card = ({ location, date, title }: CardProps) => {
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn);

  const [showActionModal, setShowActionModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [isPickedUp, setIsPickedUp] = useState(false);

  const handleCardClick = () => {
    if (isLoggedIn) setShowActionModal(true);
  };

  const handleDelete = () => {
    setShowActionModal(false);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCheckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPickupModal(true);
  };

  const handleConfirmPickup = () => {
    setShowPickupModal(false);
    setIsPickedUp(true);
  };

  return (
    <>
      <CardWrapper onClick={handleCardClick}>
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

      {showActionModal && (
        <CardActionModal
          onClose={() => setShowActionModal(false)}
          onEdit={() => alert("수정 기능은 추후 구현")}
          onDelete={handleDelete}
        />
      )}

      {showConfirmModal && (
        <ConfirmDeleteModal
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

      {showPickupModal && (
        <PickupModal
          onCancel={() => setShowPickupModal(false)}
          onConfirm={handleConfirmPickup}
        />
      )}
    </>
  );
};

export default Card;
