import styled from "@emotion/styled";

export default function Intro() {
  return (
    <IntroWrapper>
      ‘Blooming’이라는 단어는 <br /> [꽃 피는], [개화] 라는 의미를 가지고 있습니다. <br />{" "}
      대학생활을 거치며 서경대학교 학우들의 인생에 <br /> 활짝 꽃이 피기를 염원하는 의미를 담고
      있으며, <br /> 축제는 대학의 꽃이기에 축제 기간동안 <br /> 청춘의 개화기가 시작된다는 의미
      또한 담겨있습니다.
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  max-width: 270px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
`;
