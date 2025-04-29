import styled from "@emotion/styled";

export const Container = styled.div<{ imgUrl: string }>`
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%),
    url(${(props) => props.imgUrl}) no-repeat center center / cover;
`;

export const Info = styled.span`
  position: absolute;
  left: 12px;
  bottom: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Waitings = styled.span`
  font-weight: 600;
`;

export const Faculty = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;
