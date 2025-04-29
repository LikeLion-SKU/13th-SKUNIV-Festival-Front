import styled from "@emotion/styled";
import MainSection from "./MainSection";
import Section from "./Section";
import TimeTable from "./TimeTable";
import LineUp from "./LineUp";
import Booth from "./Booth";
import About from "./About";
import Emergency from "./Emergency";
import Intro from "./Intro";
import useLanguage from "../../shared/hooks/useLanguage";

export default function Home() {
  const [lang, setLang] = useLanguage();

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
          <Section title="대피로 & AED 위치" content={<Emergency />} />
          <Section title="about" content={<About />} />
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
