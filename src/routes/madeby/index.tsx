import styled from "@emotion/styled";
import { useEffect } from "react";
import Section from "../home/Section";
import Daum from "./Daum";
import Hanbit from "./Hanbit";
import LikeLion from "./LikeLion";

export default function Madeby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
