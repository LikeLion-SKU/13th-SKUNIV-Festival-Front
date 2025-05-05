import styled from "@emotion/styled";
import Section from "../home/Section";
import Daum from "./Daum";
import Hanbit from "./Hanbit";
import LikeLion from "./LikeLion";
import useHeader from "../../shared/hooks/useHeader";

export default function Madeby() {
  useHeader({
    title: null,
    showHamburger: true,
    transparent: true,
  });

  return (
    <HomeWrapper>
      <LikeLion />
      <Section title="다움" content={<Daum />} />
      <Section title="한빛" content={<Hanbit />} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: auto;
  background: linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%);
`;
