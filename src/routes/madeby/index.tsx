import styled from "@emotion/styled";
import Section from "../home/Section";
import Daum from "./Daum";
import Hanbit from "./Hanbit";
import LikeLion from "./LikeLion";
import useHeader from "../../shared/hooks/useHeader";
import { useTranslation } from "react-i18next";

export default function Madeby() {
  useHeader({
    title: null,
    showHamburger: true,
    transparent: true,
  });

  const { t } = useTranslation("credit");

  return (
    <HomeWrapper>
      <LikeLion />
      <Section title={t("daum")} content={<Daum />} />
      <Section title={t("hanbit")} content={<Hanbit />} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: auto;
  background: linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%);
`;
