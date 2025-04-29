import styled from "@emotion/styled";
import { Link } from "react-router";

export const Layout = styled.div`
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BoothImage = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 288px;
  border-radius: 10px;
  background: url(${(props) => props.imgUrl}) no-repeat center center / cover;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 20px;
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoTitle = styled.span`
  color: #1a1a1a;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const InstagramChip = styled(Link)`
  padding-inline: 10px;
  padding-block: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #1a1a1a;
  font-size: 8.2px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.138px;
  letter-spacing: -0.205px;
  border: 1px solid #d1d1d1;
  border-radius: 100px;
`;

export const Description = styled.p`
  color: #1a1a1a;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.8px;
  letter-spacing: -0.325px;
  word-break: break-all;
`;

export const Divider = styled.hr`
  all: unset;
  margin-inline: -20px;
  height: 4px;
  background: #f6f6f6;
  border: none;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const MenuTitle = styled.span`
  color: #121212;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.45px;
`;

export const Menus = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 41px;
  row-gap: 12px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: #e5e5e5;
    transform: translateX(-50%);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #1a1a1a;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.325px;
  & .menu-kr {
    color: #7d7d7d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;
