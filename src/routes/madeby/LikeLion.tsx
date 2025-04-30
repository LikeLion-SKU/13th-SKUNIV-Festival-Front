import styled from "@emotion/styled";
import madeby from "@image/madeby.svg";
import RoleBlock, { Member } from "./RoleBlock";

import she from "@image/she.svg"; // 서현은
import idh from "@image/idh.svg"; // 임다현
import jyj from "@image/jyj.svg"; // 정영진
import nyj from "@image/nyj.svg"; // 나윤주
import hyh from "@image/hyh.svg"; // 허윤호
import psy from "@image/psy.svg"; // 박성연
import ptk from "@image/ptk.svg"; // 박태경
import yhj from "@image/yhj.svg"; // 윤희준
import mdm from "@image/mdm.svg"; // 민동명
import lyj from "@image/lyj.svg"; // 이윤정
import ljd from "@image/ljd.svg"; // 이진동

const LionList: Member[] = [
  { role: "PM", name: "서현은", department: "컴퓨터공학과 22", img: she },
  { role: "PM", name: "임다현", department: "소프트웨어학과 23", img: idh },
  { role: "Design", name: "정영진", department: "비주얼디자인학부 20", img: jyj },
  { role: "Design", name: "나윤주", department: "비주얼디자인학부 21", img: nyj },
  { role: "Frontend", name: "허윤호", department: "전자컴퓨터공학과 24", img: hyh },
  { role: "Frontend", name: "박성연", department: "소프트웨어학과 22", img: psy },
  { role: "Frontend", name: "박태경", department: "컴퓨터공학과 22", img: ptk },
  { role: "Backend", name: "윤희준", department: "소프트웨어학과 20", img: yhj },
  { role: "Backend", name: "민동명", department: "컴퓨터공학과 22", img: mdm },
  { role: "Backend", name: "이윤정", department: "전자공학과 21", img: lyj },
  { role: "Infrastructure", name: "이진동", department: "소프트웨어학과 23", img: ljd },
];

export default function LikeLion() {
  return (
    <Wrapper>
      <img src={madeby} />
      <IntroWrapper>
        <p className="title">서경대학교 멋쟁이사자처럼 13기</p>
        <p className="content">
          귀한 시간 내어 이번 축제페이지에 많은 관심 주셔서 감사합니다. 앞으로도 많은 관심과 사랑
          부탁드립니ㄷr...(하트)
        </p>
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
