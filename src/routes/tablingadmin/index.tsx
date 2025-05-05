import { useQuery } from "@tanstack/react-query";
import ModalTransition from "../../shared/components/Modal/ModalTransition";
import useHeader from "../../shared/hooks/useHeader";
import Modals from "./modals";
import * as S from "./style";
import WaitingRow from "./WaitingRow";
import BaseResponse from "../../shared/interfaces/BaseResponse";
import { adminAPI, publicAPI } from "../../shared/lib/api";
import { useParams } from "react-router";

interface ReservationsResponse {
  id: number;
  name: string;
  phoneNum: string;
  headCount: number;
  reservationTime: string;
}

export default function TablingAdmin() {
  const { boothId } = useParams();

  const { data: response } = useQuery<BaseResponse<ReservationsResponse[]>>({
    queryKey: ["adminReservations", boothId],
    queryFn: () => adminAPI.get(`/reservations/admin/${boothId}`).then((response) => response.data),
    enabled: !!boothId,
  });

  const { data: userWaitings } = useQuery<{ boothName: string; waitingOrder: number }>({
    queryKey: ["waitings", boothId],
    queryFn: () =>
      publicAPI.get(`/reservations/waiting/${boothId}`).then((response) => response.data),
    enabled: !!boothId,
  });

  useHeader({
    title: userWaitings?.boothName ? userWaitings.boothName : null,
    showBack: true,
    showHamburger: false,
  });

  const { data: waitings } = useQuery<number>({
    queryKey: ["adminBoothWaitings", boothId],
    queryFn: () => adminAPI.get(`/booths/admin/${boothId}`).then((response) => response.data),
    enabled: !!boothId,
  });

  return (
    <>
      <S.Layout>
        <S.Waiting>현재 대기 팀</S.Waiting>
        <S.WaitingNumber>{waitings ?? "?"}팀</S.WaitingNumber>
        <S.WaitingRowContainer>
          {response?.data.map((waiting) => (
            <WaitingRow
              key={waiting.id}
              name={waiting.name}
              phoneNum={waiting.phoneNum}
              headCount={waiting.headCount}
              reservationTime={waiting.reservationTime}
            />
          ))}
        </S.WaitingRowContainer>
      </S.Layout>
      <ModalTransition>
        <Modals />
      </ModalTransition>
    </>
  );
}
