import { useState } from "react";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";

const ReservationLogin = () => {
  const { onClose, setModalStep, setReservation } = useReservationStore();

  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <Modal
      actions={[
        {
          title: "닫기",
          variant: "outline",
          action: onClose,
        },
        {
          title: "확인",
          variant: "confirm",
          action: () => {
            setReservation({ name, phoneNum });
            setModalStep(5);
          },
          disabled: name.length === 0 || phoneNum.length === 0,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>예약 확인</Title>
        <Inputs>
          <InputWrapper>
            <InputLabel>예약자 이름</InputLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value.trim())} />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>전화번호</InputLabel>
            <Input
              type="tel"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value.trim())}
            />
          </InputWrapper>
        </Inputs>
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

const Inputs = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const InputLabel = styled.span`
  color: #2e2e2e;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Input = styled.input`
  all: unset;
  padding: 4px;
  background: #eaeaea;
  border-radius: 10px;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export default ReservationLogin;
