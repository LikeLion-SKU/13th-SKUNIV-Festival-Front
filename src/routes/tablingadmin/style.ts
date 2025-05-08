import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Waiting = styled.span`
  display: block;
  text-align: center;
  color: #1a1a1a;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.375px;
`;

export const Loading = styled.span`
  display: block;
  text-align: center;
  color: #aaaaaa;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WaitingNumber = styled.span`
  display: block;
  text-align: center;
  margin-top: 8px;
  color: #4aa4ff;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.9px;
`;

export const WaitingRowContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
