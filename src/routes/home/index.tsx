import Section from "./Section";
import * as styled from "./style";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <styled.HomeWrapper>
      <Section title="축제 소개" content="이번 축제는 어쩌구 저쩌구 어쩌구 저쩌구" />
      <Section title="공연 시간표" content="공연 시간표 컴포넌트" />
      <Section title="라인업" content="라인업 컴포넌트" />
      <Section title="부스 보러가기" content="부스 보러가기 컴포넌트" />
      <Section title="about" content="?" />
    </styled.HomeWrapper>
  );
}
