import useAdminStore from "../../../shared/stores/useAdminStore";
import CallComplete from "./CallComplete";
import CallPerson from "./CallPerson";

const Modals = () => {
  const { modalStep } = useAdminStore();

  switch (modalStep) {
    case 0:
    default:
      return null;

    // case 1: 관리자 로그인 모달

    //   호출
    case 2:
      return <CallPerson />;
    //   호출 완료
    case 3:
      return <CallComplete />;
  }
};

export default Modals;
