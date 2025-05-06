import { useTranslation } from "react-i18next";
import useReservationStore from "../../../stores/useReservationStore";
import Modal from "../../Modal";
import styled from "@emotion/styled";

const ReservationLogin = () => {
  const { onClose, setModalStep, name, phoneNum, setReservation } = useReservationStore();

  const { t } = useTranslation("ui");

  return (
    <Modal
      actions={[
        {
          title: t("close"),
          variant: "outline",
          action: onClose,
        },
        {
          title: t("confirm"),
          variant: "confirm",
          action: () => {
            setReservation({ name, phoneNum });
            setModalStep(5);
          },
          disabled: !name || !phoneNum || name?.length === 0 || phoneNum?.length === 0,
        },
      ]}
      onClose={onClose}
    >
      <Layout>
        <Title>{t("check_reservation")}</Title>
        <Inputs>
          <InputWrapper>
            <InputLabel>{t("reservation_username")}</InputLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setReservation({ name: e.target.value.trim() })}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>{t("reservation_phone_number")}</InputLabel>
            <Input
              type="tel"
              pattern="010-[0-9]{3,4}-[0-9]{4}"
              maxLength={13}
              value={phoneNum}
              onChange={(e) =>
                setReservation({
                  phoneNum: e.target.value
                    .trim()
                    .replace(/[^0-9]/g, "")
                    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                    .replace(/(-{1,2})$/g, ""),
                })
              }
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
  white-space: nowrap;
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
