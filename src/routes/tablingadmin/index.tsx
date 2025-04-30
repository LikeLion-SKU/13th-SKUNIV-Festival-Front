import { useQuery } from "@tanstack/react-query";
import ModalTransition from "../../shared/components/Modal/ModalTransition";
import useHeader from "../../shared/hooks/useHeader";
import Modals from "./modals";
import * as S from "./style";
import WaitingRow from "./WaitingRow";
import BaseResponse from "../../shared/interfaces/BaseResponse";
import { adminAPI } from "../../shared/lib/api";
import { useParams } from "react-router";

interface ReservationsResponse {
  id: number;
  name: string;
  phoneNum: string;
  headCount: number;
  reservationTime: string;
}

export default function TablingAdmin() {
  const { boothName } = useParams();

  useHeader({
    title: boothName!,
    showBack: true,
    showHome: true,
  });

  const { data: response } = useQuery<BaseResponse<ReservationsResponse[]>>({
    queryKey: ["adminReservations"],
    queryFn: () =>
      adminAPI.get(`/reservations/admin/${boothName}`).then((response) => response.data),
    enabled: !!boothName,
  });

  const { data: waitings } = useQuery<number>({
    queryKey: ["adminBoothWaitings"],
    queryFn: () => adminAPI.get(`/booths/admin/${boothName}`).then((response) => response.data),
    enabled: !!boothName,
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
