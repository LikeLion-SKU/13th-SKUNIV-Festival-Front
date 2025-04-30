import styled from "@emotion/styled";

const HanbitList = [
  { name: "최창조", department: "총학생회장 글비 20" },
  { name: "윤의찬", department: "정책기획국장 전자 20" },
  { name: "김윤서", department: "사무국장 글비 21" },
  { name: "최운조", department: "홍보국장 비디 20" },
  { name: "정바다", department: "대외협력국장 글비 21" },
  { name: "심은교", department: "복지국장 아텍 23" },
  { name: "최태현", department: "운영집행국장 나화생 22" },
  { name: "태웅재", department: "미래교육국장 군사 23" },
  { name: "정영진", department: "홍보부장 비디 20" },
  { name: "박승아", department: "홍보부장 라디 21" },
  { name: "김지유", department: "미래교육부장 코뷰 24" },
  { name: "송은채", department: "복지부장 코뷰 24" },
  { name: "김태건", department: "운영집행국원 미융 25" },
  { name: "박지혜", department: "운영집행국원 미융 25" },
  { name: "노유승", department: "대외협력국원 미융 25" },
  { name: "백승연", department: "미래교육국원 메디 25" },
  { name: "변정빈", department: "홍보국원 아텍 25" },
  { name: "장규민", department: "복지국원 군사 24" },
];

export default function Hanbit() {
  return (
    <Wrapper>
      <p className="text">축제를 기획해주신 총학생회 ‘한빛' 구성원</p>
      <CardGrid>
        {HanbitList.map((member, index) => (
          <HanbitCard key={index} name={member.name} department={member.department} />
        ))}
      </CardGrid>
    </Wrapper>
  );
}

function HanbitCard({ name, department }: { name: string; department: string }) {
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
