import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import reservationSchema from "./reservationSchema";
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

type ReservationWaitingsResponse = string;

const Reservation = () => {
  const { setModalStep, onClose, setReservation } = useReservationStore();
  const { title } = useHeaderStore();

  const { data: waitings } = useQuery<BaseResponse<ReservationWaitingsResponse>>({
    queryKey: ["reservationWaitings", title],
    queryFn: () =>
      publicAPI
        .get("/reservations/waiting", { params: { boothName: title } })
        .then((response) => response.data),
    enabled: !!title,
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
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
          boothName: title,
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
          alert("예약에 실패하였습니다.");
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
          { title: "닫기", variant: "outline", action: () => onClose() },
          {
            title: "예약하기",
            variant: "confirm",
            action: handleSubmit(onSubmit),
          },
        ]}
        onClose={onClose}
      >
        <Layout>
          <Title>{title} 부스 예약</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="예약자 명 :"
              type="text"
              errorMessage={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="전화번호 :"
              type="tel"
              errorMessage={errors.phoneNum?.message}
              {...register("phoneNum")}
            />
            <Input
              label="인원 수 :"
              trailing="명"
              type="tel"
              errorMessage={errors.headCount?.message}
              {...register("headCount")}
            />
          </Form>
          <WaitingText>
            현재 대기팀 : <Waitings>{waitings?.data ?? "?"}팀</Waitings>
          </WaitingText>
          <Subtitle>
            수집된 개인정보는 당일 파기를 원칙으로 합니다.
            <br />
            <br />
            5분 내 미도착 시 자동 취소
            <br />
            <br />* 대표자 1명만 예약 가능 (중복 시 불이익)
          </Subtitle>
          <Agreement onClick={() => setAgreed((prev) => !prev)}>
            {agreed === true ? <Checked /> : <Unchecked />}
            <AgreementText>위 안내사항을 모두 숙지하였습니다.</AgreementText>
          </Agreement>
        </Layout>
      </Modal>
      {showNotAgreed && (
        <Modal
          actions={[
            {
              title: "닫기",
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
            <AgreePlease>개인정보 수집에 동의해주세요.</AgreePlease>
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
