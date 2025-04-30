import ReservationList from "../../../shared/components/FloatingButton/modals/ReservationList";
import useReservationStore from "../../../shared/stores/useReservationStore";
import AlreadyReserved from "./AlreadyReserved";
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

    //   이미 예약
    case 3:
      return <AlreadyReserved />;

    //   예약 확인
    case 4:
      return <ReservationList />;
  }
};

export default Modals;
