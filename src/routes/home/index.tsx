import { useState } from "react";
import styled from "styled-components";
import MainSection from "./MainSection";
import Section from "./Section";
import TimeTable from "./TimeTable";
import LineUp from "./LineUp";
import Booth from "./Booth";
import About from "./About";
import Emergency from "./Emergency";
import Intro from "./Intro";

export default function Home() {
  const [lang, setLang] = useState<string | null>(null);

  const handleLangSelect = (selectedLang: string) => {
    setLang(selectedLang);
  };

  return (
    <HomeWrapper langSelected={!!lang}>
      <MainSection onSelectLang={handleLangSelect} langSelected={!!lang} />
      {lang && (
        <>
          <Section title="축제 소개" content={<Intro />} />
          <Section title="공연 시간표" content={<TimeTable />} />
          <Section title="라인업" content={<LineUp />} />
          <Section title="부스 보러가기" content={<Booth />} />
          <Section title="about" content={<About />} />
          <Section title="대피로 & AED 위치" content={<Emergency />} />
        </>
      )}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div<{ langSelected: boolean }>`
  height: ${({ langSelected }) => (langSelected ? "auto" : "100vh")};
  background: ${({ langSelected }) =>
    langSelected ? "linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%)" : "#1E3DC7"};
`;
