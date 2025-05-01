import { useQuery } from "@tanstack/react-query";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import { publicAPI } from "../../../lib/api";
import BaseResponse from "../../../interfaces/BaseResponse";
import ReservationRow from "./ReservationRow";
import ReservationNotFound from "./ReservationNotFound";

interface ReservationListResponse {
  id: number;
  boothName: string;
  headCount: number;
  waitingTeam: number;
}

const ReservationList = () => {
  const { onClose, name, phoneNum, idsToDelete, setModalStep } = useReservationStore();

  const {
    isLoading,
    data: response,
    error,
  } = useQuery<BaseResponse<ReservationListResponse[]>>({
    queryKey: ["reservationList"],
    queryFn: () =>
      publicAPI
        .post("/reservations/list", {
          name,
          phoneNum,
        })
        .then((response) => response.data),
    enabled: !!name && !!phoneNum,
  });

  //   TODO
  if (isLoading) return <h1>로딩중...</h1>;

  if (error) return <ReservationNotFound />;

  if (response?.data?.length === 0) return <ReservationNotFound />;

  return (
    <Modal
      actions={[
        {
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
        {
          title: "예약 취소",
          variant: "destructive",
          action: () => setModalStep(6),
          disabled: idsToDelete.length === 0,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>예약 확인</Title>
        <Reservations>
          {response?.data?.map((reservation) => (
            <ReservationRow
              key={reservation.id}
              id={reservation.id}
              boothName={reservation.boothName}
              headCount={reservation.headCount}
              waitingTeam={reservation.waitingTeam}
            />
          ))}
        </Reservations>
      </Layout>
    </Modal>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Title = styled.span`
  color: #1a1a1a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const Reservations = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ReservationList;
