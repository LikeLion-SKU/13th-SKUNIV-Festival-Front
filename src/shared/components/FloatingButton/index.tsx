import { useState } from "react";
import { Button, Buttons, Container, MainButton } from "./style";
import Plus from "@icon/plus.svg?react";
import CircleClose from "@icon/circle_close.svg?react";
import { useNavigate } from "react-router";
import useReservationStore from "../../stores/useReservationStore";

const FloatingButton = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const { setModalStep } = useReservationStore();

  return (
    <>
      <Container>
        {opened && (
          <Buttons>
            <Button onClick={() => navigate("/tabling")}>부스 예약</Button>
            <Button onClick={() => navigate("/booth")}>부스 안내</Button>
            <CircleClose onClick={() => setOpened(false)} />
            <Button onClick={() => navigate("/lost")}>분실물</Button>
            <Button onClick={() => {}}>예약 확인</Button>
          </Buttons>
        )}
      </Container>
      <MainButton onClick={() => setOpened(true)}>
        <Plus />
      </MainButton>
    </>
  );
};

export default FloatingButton;
