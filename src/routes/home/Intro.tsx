import styled from "@emotion/styled";

export default function Intro() {
  return (
    <IntroWrapper>
      이번 축제는 어쩌구 이러한 이번 축제의 목적은 뭐고 축제는 뭐시기.. 축제에 대한 간략 설명 목적
      이번 축제는 어쩌구 이러한 이번 축제의 목적은 뭐고 축제는 뭐시기.. 축제에 대한 간략 설명 목적
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  max-width: 240px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
`;
