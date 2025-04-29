import useReservationStore from "../../../shared/stores/useReservationStore";
import Reservation from "./Reservation";
import ReservationComplete from "./ReservationComplete";

const Modals = () => {
  const { modalStep } = useReservationStore();

  switch (modalStep) {
    case 0:
    default:
      return null;

    //   부스 예약
    case 1:
      return <Reservation />;

    //   예약 완료
    case 2:
      return <ReservationComplete />;
  }
};

export default Modals;
