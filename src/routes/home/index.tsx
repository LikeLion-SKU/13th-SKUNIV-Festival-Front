import styled from "styled-components";
import MainSection from "./MainSection";
import Section from "./Section";
import TimeTable from "./TimeTable";
import LineUp from "./LineUp";
import Booth from "./Booth";

export default function Home() {
  return (
    <HomeWrapper>
      <MainSection />
      <Section title="축제 소개" content="이번 축제는 어쩌구 저쩌구 어쩌구 저쩌구" />
      <Section title="공연 시간표" content={<TimeTable />} />
      <Section title="라인업" content={<LineUp />} />
      <Section title="부스 보러가기" content={<Booth />} />
      <Section title="about" content="?" />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%);
`;
