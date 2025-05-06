import useReservationStore from "../../../stores/useReservationStore";
import ReservationCancel from "./ReservationCancel";
import ReservationCancelComplete from "./ReservationCancelComplete";
import ReservationList from "./ReservationList";
import ReservationLogin from "./ReservationLogin";

const Modals = () => {
  const { modalStep } = useReservationStore();

  switch (modalStep) {
    case 0:
    default:
      return null;

    // case 1 ~ 3: 부스 예약 페이지 모달

    //   예약 확인 로그인
    case 4:
      return <ReservationLogin />;

    //   예약 확인
    case 5:
      return <ReservationList />;

    //   예약 취소
    case 6:
      return <ReservationCancel />;

    //   예약 취소 완료
    case 7:
      return <ReservationCancelComplete />;
  }
};

export default Modals;
