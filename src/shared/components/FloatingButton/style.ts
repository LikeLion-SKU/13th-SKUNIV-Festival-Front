import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 44px;
  z-index: 999;
`;

export const MainButton = styled.button`
  all: unset;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 30px;
  cursor: pointer;
`;

export const Menus = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  backdrop-filter: blur(40px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  z-index: -1;
`;

export const Menu = styled.a`
  all: unset;
  width: 44px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
  white-space: nowrap;
  border-radius: 20px;
  cursor: pointer;
`;

export const Gap = styled.div`
  width: 52px;
`;
