import styled from "@emotion/styled";
import { Link } from "react-router";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const MainButton = styled.button`
  all: unset;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 84px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 9999px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  all: unset;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 9999px;
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
  cursor: pointer;
`;
