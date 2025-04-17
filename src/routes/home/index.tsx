import styled from "styled-components";
import Section from "./Section";
import TimeTable from "./TimeTable";

const HomeWrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%);
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Section title="축제 소개" content="이번 축제는 어쩌구 저쩌구 어쩌구 저쩌구" />
      <Section title="공연 시간표" content={<TimeTable />} />
      <Section title="라인업" content="라인업 컴포넌트" />
      <Section title="부스 보러가기" content="부스 보러가기 컴포넌트" />
      <Section title="about" content="?" />
    </HomeWrapper>
  );
}
