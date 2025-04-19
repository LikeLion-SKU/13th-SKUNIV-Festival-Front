import styled from "styled-components";
import Section from "./Section";
import TimeTable from "./TimeTable";
import mainImg from "@icon/main_title.svg";
import LineUp from "./LineUp";
import Booth from "./Booth";

const HomeWrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%);
`;

const MainSection = styled.div`
  font-family: "HSSanTokki20-Regular", sans-serif;
  text-align: center;
  color: white;
  padding-top: 100px;
  margin-bottom: 200px;
  line-height: 150%;

  & > .title {
    font-size: 14px;
  }

  & > .date {
    font-size: 12px;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <MainSection>
        <img src={mainImg} alt={mainImg} />
        <p className="title">2025 서경대학교 대동제</p>
        <p className="date">05.07~05.09</p>
      </MainSection>
      <Section title="축제 소개" content="이번 축제는 어쩌구 저쩌구 어쩌구 저쩌구" />
      <Section title="공연 시간표" content={<TimeTable />} />
      <Section title="라인업" content={<LineUp />} />
      <Section title="부스 보러가기" content={<Booth />} />
      <Section title="about" content="?" />
    </HomeWrapper>
  );
}
