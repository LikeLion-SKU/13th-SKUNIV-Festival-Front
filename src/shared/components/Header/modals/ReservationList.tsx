import { useQuery } from "@tanstack/react-query";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";
import { publicAPI } from "../../../lib/api";
import BaseResponse from "../../../interfaces/BaseResponse";
import ReservationRow from "./ReservationRow";
import ReservationNotFound from "./ReservationNotFound";
import { Trans, useTranslation } from "react-i18next";
import useLanguage from "../../../hooks/useLanguage";

interface ReservationListResponse {
  id: number;
  boothId: number;
  boothName: string;
  boothFaculty: string;
  headCount: number;
  waitingTeam: number;
}

const ReservationList = () => {
  const { onClose, name, phoneNum, idsToDelete, setModalStep } = useReservationStore();

  const [lang] = useLanguage();
  const { t } = useTranslation("ui");

  const {
    isLoading,
    data: response,
    error,
  } = useQuery<BaseResponse<ReservationListResponse[]>>({
    queryKey: ["reservationList"],
    queryFn: () =>
      publicAPI
        .post(
          "/reservations/list",
          {
            name,
            phoneNum,
          },
          {
            params: {
              lang,
            },
          }
        )
        .then((response) => response.data),
    staleTime: 0,
    gcTime: 0,
    enabled: !!name && !!phoneNum,
  });

  //   TODO
  if (isLoading)
    return (
      <Modal onClose={onClose} backdropClose={false}>
        로딩중
      </Modal>
    );

  if (error) return <ReservationNotFound />;

  if (response?.data?.length === 0) return <ReservationNotFound />;

  return (
    <Modal
      actions={[
        {
          title: t("close"),
          variant: "outline",
          action: onClose,
        },
        {
          title: t("cancel_reservation"),
          variant: "destructive",
          action: () => setModalStep(6),
          disabled: idsToDelete.length === 0,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>{t("check_reservation")}</Title>
        <Warning>
          <Trans i18nKey="reservation_breaktime_alert">{t("reservation_breaktime_alert")}</Trans>
        </Warning>
        <Reservations>
          {response?.data?.map((reservation) => (
            <ReservationRow
              key={reservation.id}
              boothId={reservation.boothId}
              boothFaculty={reservation.boothFaculty}
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
`;

const Title = styled.span`
  color: #1a1a1a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const Warning = styled.span`
  margin-top: 4px;
  color: #f00;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Reservations = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export default ReservationList;
