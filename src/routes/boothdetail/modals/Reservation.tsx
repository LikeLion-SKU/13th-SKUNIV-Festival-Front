import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import reservationSchema from "../reservationSchema";
import { z } from "zod";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useState } from "react";

import Unchecked from "@icon/unchecked.svg?react";
import Checked from "@icon/checked.svg?react";

import Error from "../../../shared/assets/lottie/error.lottie";
import { publicAPI } from "../../../shared/lib/api";
import useHeaderStore from "../../../shared/stores/useHeaderStore";
import BaseResponse from "../../../shared/interfaces/BaseResponse";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Trans, useTranslation } from "react-i18next";

interface ReservationResponse {
  id: number;
  boothName: string;
  name: string;
  phoneNum: string;
  headCount: number;
  waitingOrder: number;
  status: string;
  createdAt: string;
}

interface ReservationWaitingsResponse {
  boothName: string;
  waitingOrder: number;
}

const Reservation = () => {
  const { setModalStep, onClose, setReservation } = useReservationStore();
  const { boothId } = useParams();
  const { title } = useHeaderStore();
  const { t } = useTranslation("ui");

  const { data: waitings } = useQuery<BaseResponse<ReservationWaitingsResponse>>({
    queryKey: ["reservationWaitings", boothId],
    queryFn: () =>
      publicAPI.get(`/reservations/waiting/${boothId}`).then((response) => response.data),
    enabled: !!boothId,
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
  } = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phoneNum: "",
      headCount: undefined,
    },
    mode: "all",
  });

  const [agreed, setAgreed] = useState(false);
  const [showNotAgreed, setShowNowAgreed] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof reservationSchema>> = async (data) => {
    if (isValid) {
      if (!agreed) return setShowNowAgreed(true);

      try {
        // 예약
        const response = await publicAPI.post<BaseResponse<ReservationResponse>>("/reservations", {
          boothId: Number(boothId),
          name: data.name,
          phoneNum: data.phoneNum,
          headCount: data.headCount,
        });

        if (response.data?.success) {
          // 예약 성공
          setReservation({
            name: data.name,
            phoneNum: data.phoneNum,
            waitingOrder: response.data?.data?.waitingOrder,
          });
          setModalStep(2);
        } else {
          alert(t("reservation_error"));
        }
      } catch (err) {
        if ((err as AxiosError).status === 400) {
          setModalStep(3);
        }
      }
    }
  };

  return (
    <>
      <Modal
        actions={[
          { title: t("close"), variant: "outline", action: () => onClose() },
          {
            title: t("reservation_confirm"),
            variant: "confirm",
            action: handleSubmit(onSubmit),
          },
        ]}
        onClose={onClose}
      >
        <Layout>
          <Title>{t("reservation_title", { title: title?.replace("<br>", "") })}</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={`${t("reservation_username")} :`}
              type="text"
              autoComplete="off"
              errorMessage={
                errors.name ? t(errors.name.message as "reservation_enter_username") : undefined
              }
              {...register("name")}
            />
            <Input
              label={`${t("reservation_phone_number")} :`}
              type="tel"
              pattern="010-[0-9]{3,4}-[0-9]{4}"
              maxLength={13}
              autoComplete="off"
              errorMessage={
                errors.phoneNum
                  ? t(
                      errors.phoneNum.message as
                        | "reservation_enter_phone_number"
                        | "reservation_enter_valid_phone_number"
                    )
                  : undefined
              }
              {...register("phoneNum", {
                onChange: (e) => {
                  const input = e.target.value.trim() as string;

                  setValue(
                    "phoneNum",
                    input
                      .replace(/[^0-9]/g, "")
                      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                      .replace(/(-{1,2})$/g, "")
                  );
                },
              })}
            />
            <Input
              label={`${t("reservation_haedCount")} :`}
              trailing={t("headCount_trailing")}
              type="tel"
              autoComplete="off"
              errorMessage={
                errors.headCount
                  ? t(errors.headCount.message as "reservation_headCount_only_number")
                  : undefined
              }
              {...register("headCount")}
            />
          </Form>
          <WaitingText>
            {t("reservation_current_waiting")} :{" "}
            <Waitings>
              {waitings?.data?.waitingOrder ? waitings.data.waitingOrder - 1 : "?"}{" "}
              {t("team_trailing")}
            </Waitings>
          </WaitingText>
          <Subtitle>
            <Trans i18nKey="reservation_disclaimer">{t("reservation_disclaimer")}</Trans>
          </Subtitle>
          <Agreement onClick={() => setAgreed((prev) => !prev)}>
            {agreed === true ? <Checked /> : <Unchecked />}
            <AgreementText>{t("reservation_agree")}</AgreementText>
          </Agreement>
        </Layout>
      </Modal>
      {showNotAgreed && (
        <Modal
          actions={[
            {
              title: t("close"),
              variant: "outline",
              action: () => setShowNowAgreed(false),
            },
          ]}
          onClose={onClose}
          padding="0px 30px 30px 30px"
        >
          <AgreeLayout>
            <DotLottiePlayer
              src={Error}
              autoplay
              loop
              style={{ width: "100px", height: "100px" }}
            />
            <AgreePlease>{t("reservation_please_agree")}</AgreePlease>
          </AgreeLayout>
        </Modal>
      )}
    </>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32.665px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

const Subtitle = styled.p`
  margin-top: 4px;
  color: #ff0000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  word-break: keep-all;
`;

const Form = styled.form`
  all: unset;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WaitingText = styled.span`
  color: #2e2e2e;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 32.665px;
  letter-spacing: -0.45px;
`;

const Waitings = styled.span`
  color: #4aa4ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 32.665px;
  letter-spacing: -0.45px;
`;

const Agreement = styled.div`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const AgreementText = styled.span`
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const AgreeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AgreePlease = styled.span`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.665px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

export default Reservation;
