import styled from "@emotion/styled";
import useAdminStore from "../../shared/stores/useAdminStore";

interface WaitingRowProps {
  name: string;
  phoneNum: string;
  headCount: number;
}

const WaitingRow = ({ name, phoneNum, headCount }: WaitingRowProps) => {
  const { setModalStep } = useAdminStore();

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Divider />
      <PhoneNumber>{phoneNum}</PhoneNumber>
      <Divider />
      <HeadCount>{headCount}</HeadCount>
      <Call onClick={() => setModalStep(2)}>호출</Call>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #cdcdcd;
`;

const Name = styled.span`
  color: #1a1a1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.5px;
  letter-spacing: -0.4px;
`;

const Divider = styled.hr`
  width: 1px;
  height: 14px;
  background: #d8d8d8;
`;

const PhoneNumber = styled.span`
  color: #7d7d7d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.25px;
  letter-spacing: -0.35px;
`;

const HeadCount = styled.span`
  color: #7d7d7d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.25px;
  letter-spacing: -0.35px;
`;

const Call = styled.button`
  all: unset;
  margin-left: auto;
  padding: 4px 10px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  background: #4aa3ff;
  border-radius: 4px;
  cursor: pointer;
`;

export default WaitingRow;
