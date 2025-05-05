import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation("main");

  return (
    <IntroWrapper>
      <Trans i18nKey="introduction_text">{t("introduction_text")}</Trans>
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
