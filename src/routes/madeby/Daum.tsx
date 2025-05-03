import styled from "@emotion/styled";

const DaumList = [
  { name: "이현택", department: "글로벌비즈니스 23" },
  { name: "지연우", department: "글로벌비즈니스 23" },
  { name: "문정우", department: "소프트웨어학과 22" },
  { name: "강대한", department: "글로벌비지니스 20" },
  { name: "임상환", department: "전자컴퓨터공학 23" },
  { name: "황효청", department: "뷰티테라피&메이크업 22" },
  { name: "程雨薇", department: "뷰티테라피&메이크업 21" },
];

export default function Daum() {
  return (
    <Wrapper>
      <p className="text">번역에 도움을 주신 글로벌 동아리 '다움' 구성원</p>
      <CardGrid>
        {DaumList.map((member, index) => (
          <DaumCard key={index} name={member.name} department={member.department} />
        ))}
      </CardGrid>
    </Wrapper>
  );
}

function DaumCard({ name, department }: { name: string; department: string }) {
  return (
    <Card>
      <p className="name">{name}</p>
      <p className="department">{department}</p>
    </Card>
  );
}

const Wrapper = styled.div`
  text-align: center;

  & > .text {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 24px;
    opacity: 0.8;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Card = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 14px;

  .name {
    font-weight: 600;
    font-size: 16px;
  }

  .department {
    font-weight: 400;
    font-size: 12px;
  }
`;
