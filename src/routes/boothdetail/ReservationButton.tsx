import styled from "@emotion/styled";

const ReservationButton = () => {
  return (
    <Footer>
      <Button>예약하기</Button>
    </Footer>
  );
};

const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-top: 1.5px solid #d7d7d7;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  border-radius: 10px;
  background: #4aa4ff;
  cursor: pointer;
`;

export default ReservationButton;
