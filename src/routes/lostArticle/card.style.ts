import styled from "styled-components";

export const CardWrapper = styled.div`
  background: linear-gradient(to bottom, #666, #333);
  border-radius: 10px;
  padding: 10px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Location = styled.div`
  color: #b3b3b3;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #b3b3b3;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DateText = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const CheckIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
