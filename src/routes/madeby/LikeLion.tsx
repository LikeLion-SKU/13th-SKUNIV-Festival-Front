import styled from "@emotion/styled";
import Madeby from "@image/lions/madeby.svg?react";
import RoleBlock, { Member } from "./RoleBlock";

import she from "@image/lions/she.webp";
import idh from "@image/lions/idh.webp";
import jyj from "@image/lions/jyj.webp";
import nyj from "@image/lions/nyj.webp";
import hyh from "@image/lions/hyh.webp";
import psy from "@image/lions/psy.webp";
import ptk from "@image/lions/ptk.webp";
import yhj from "@image/lions/yhj.webp";
import mdm from "@image/lions/mdm.webp";
import lyj from "@image/lions/lyj.webp";
import ljd from "@image/lions/ljd.webp";
import { useTranslation } from "react-i18next";

const LionList: Member[] = [
  { role: "PM", name: "서현은", department: "컴퓨터공학과 22", img: she },
  { role: "PM", name: "임다현", department: "소프트웨어학과 23", img: idh },
  { role: "Design", name: "정영진", department: "비주얼디자인전공 20", img: jyj },
  { role: "Design", name: "나윤주", department: "비주얼디자인전공 21", img: nyj },
  { role: "Frontend", name: "허윤호", department: "전자컴퓨터공학과 24", img: hyh },
  { role: "Frontend", name: "박성연", department: "소프트웨어학과 22", img: psy },
  { role: "Frontend", name: "박태경", department: "컴퓨터공학과 22", img: ptk },
  { role: "Backend", name: "윤희준", department: "소프트웨어학과 20", img: yhj },
  { role: "Backend", name: "민동명", department: "컴퓨터공학과 22", img: mdm },
  { role: "Backend", name: "이윤정", department: "전자공학과 21", img: lyj },
  { role: "Infrastructure", name: "이진동", department: "소프트웨어학과 23", img: ljd },
];

export default function LikeLion() {
  const { t } = useTranslation("credit");

  return (
    <Wrapper>
      <Madeby />
      <IntroWrapper>
        <p className="title">{t("seokyeong")}</p>
        <p className="content">{t("thankyou")}</p>
      </IntroWrapper>

      <Section>
        <RoleBlock role="PM" members={LionList} />
        <RoleBlock role="Design" members={LionList} />
        <RoleBlock role="Frontend" members={LionList} />
        <RoleBlock role="Backend" members={LionList} />
        <RoleBlock role="Infrastructure" members={LionList} />
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: white;
`;

const IntroWrapper = styled.div`
  max-width: 300px;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  margin-top: 24px;
  text-align: center;

  & > .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  & > .content {
    font-size: 12px;
    font-weight: 400;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 60px;
`;
