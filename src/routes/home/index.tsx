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
import useHeader from "../../shared/hooks/useHeader";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [lang, setLang] = useLanguage();

  const handleLangSelect = (selectedLang: string) => {
    setLang(selectedLang);
  };

  useHeader({
    title: null,
    showHamburger: true,
    transparent: true,
  });

  const { t } = useTranslation("main");

  return (
    <HomeWrapper langSelected={!!lang}>
      <MainSection onSelectLang={handleLangSelect} langSelected={!!lang} />
      {lang && (
        <>
          <Section title={t("introduction_title")} content={<Intro />} />
          <Section title={t("schedule_title")} content={<TimeTable />} />
          <Section title={t("line_up")} content={<LineUp />} />
          <Section title={t("booth_guide")} content={<Booth />} />
          <Section title={t("evacuation_aed")} content={<Emergency />} />
          <Section title="About" content={<About />} />
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
