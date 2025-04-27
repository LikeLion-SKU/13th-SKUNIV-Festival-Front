import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div<{ padding?: string }>`
  position: absolute;
  left: 50%;
  padding: ${(props) => (props?.padding ? props.padding : "30px")};
  background: #fff;
  border-radius: 20px;
  transform: translateX(-50%);
`;

export const Actions = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
