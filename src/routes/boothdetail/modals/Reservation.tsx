import styled from "@emotion/styled";
import Modal from "../../../shared/components/Modal";
import useReservationStore from "../../../shared/stores/useReservationStore";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import reservationSchema from "./reservationSchema";
import { z } from "zod";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useState } from "react";

import Unchecked from "@icon/unchecked.svg?react";
import Checked from "@icon/checked.svg?react";

import Error from "../../../shared/assets/lottie/error.lottie";

const Reservation = () => {
  const { setModalStep, onClose } = useReservationStore();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
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

  async function onSubmit() {
    await trigger();

    if (isValid) {
      if (!agreed) return setShowNowAgreed(true);
      setModalStep(2);
    }
  }

  return (
    <>
      <Modal
        actions={[
          { title: "닫기", variant: "outline", action: () => onClose() },
          {
            title: "예약하기",
            variant: "confirm",
            action: () => onSubmit(),
          },
        ]}
      >
        <Layout>
          <Title>디자인학부 부스 예약</Title>
          <Subtitle>
            5분 내 미도착 시 자동 취소
            <br />
            대표자 1명만 예약 가능 (중복 시 불이익)
          </Subtitle>
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
            현재 대기팀 : <Waitings>3팀</Waitings>
          </WaitingText>
          <Agreement onClick={() => setAgreed((prev) => !prev)}>
            {agreed === true ? <Checked /> : <Unchecked />}
            <AgreementText>개인정보 수집에 동의합니다.</AgreementText>
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

const Subtitle = styled.span`
  margin-top: 4px;
  color: #aaa;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
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
  color: #aaa;
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
