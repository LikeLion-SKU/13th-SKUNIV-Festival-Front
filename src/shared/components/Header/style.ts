import styled from "@emotion/styled";

export const Header = styled.header<{ transparent: boolean }>`
  position: ${(props) => (props.transparent ? "fixed" : "sticky")};
  top: 0;
  left: ${(props) => (props.transparent ? 0 : undefined)};
  right: ${(props) => (props.transparent ? 0 : undefined)};
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.transparent ? "transparent" : "#fff")};
  border-bottom: ${(props) => (props.transparent ? undefined : "1px solid #d7d7d7")};
  z-index: 99;
`;

export const Back = styled.button`
  all: unset;
  margin-right: auto;
  padding: 8px;
  cursor: pointer;
`;

export const Title = styled.h1`
  position: absolute;
  color: #121212;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.5px;
  cursor: default;
  user-select: none;
`;

export const Hamburger = styled.button<{ transparent: boolean }>`
  all: unset;
  margin-left: auto;
  padding: 8px;
  cursor: pointer;
`;
