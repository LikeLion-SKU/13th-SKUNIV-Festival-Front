import styled from "@emotion/styled";
import useReservationStore from "../../shared/stores/useReservationStore";
import { useTranslation } from "react-i18next";
import { useBreakTime } from "../../shared/hooks/useBreakTime";

interface ReservationButtonProps {
  disabled?: boolean;
}

const ReservationButton = ({ disabled }: ReservationButtonProps) => {
  const { setModalStep } = useReservationStore();

  const { t } = useTranslation("booth");

  const isDayBreakTime = useBreakTime("16:30", "16:59");

  let isNotAvailableTime = useBreakTime("23:00", "9:59");

  isNotAvailableTime = true; // ! 5월 6일만

  return (
    <Footer>
      <Button
        disabled={disabled || isDayBreakTime || isNotAvailableTime}
        onClick={() => !disabled && setModalStep(1)}
      >
        {disabled
          ? t("no_reservation")
          : isDayBreakTime
          ? t("day_break_time")
          : isNotAvailableTime
          ? t("reservation_unavailable")
          : t("reserve")}
      </Button>
    </Footer>
  );
};

const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-top: 1.5px solid #d7d7d7;
`;

const Button = styled.button<{ disabled?: boolean }>`
  all: unset;
  width: 100%;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? "#919191" : "#4aa4ff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default ReservationButton;
