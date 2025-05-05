import styled from "@emotion/styled";
import { Link } from "react-router";

export const Layout = styled.div`
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BoothImage = styled.div<{ imgUrl: string; zoom: boolean }>`
  width: 100%;
  height: 288px;
  border-radius: 10px;
  background: url(${(props) => props.imgUrl}) no-repeat center center /
    ${(props) => (props.zoom ? "cover" : "contain")};
  background-color: #000;
  cursor: pointer;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

export const InfoTitle = styled.span`
  color: #1a1a1a;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  word-break: break-all;
`;

export const Chips = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTitle = styled.span`
  color: #121212;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.45px;
`;

export const Menus = styled.div<{ rows: number }>`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
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
  gap: 4px;
  color: #1a1a1a;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.325px;
  word-break: break-all;
  & .menu-kr {
    color: #7d7d7d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;

export const MenuPrice = styled.span`
  color: #1a1a1a;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.325px;
  white-space: nowrap;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.div<{ opened: boolean }>`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #bbdcff;
  border-radius: ${(props) => (props.opened ? "10px 10px 0 0" : "10px")};
  color: #1a1a1a;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
  cursor: pointer;
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #bbdcff;
  border-top: none;
  border-radius: 0 0 10px 10px;
  z-index: 50;
`;

export const Option = styled.div<{ last?: boolean; value: string }>`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
  cursor: pointer;
  border-top: ${(props) => (props.last ? "1px solid #bbdcff" : undefined)};
`;
