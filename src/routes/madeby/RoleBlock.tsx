import styled from "@emotion/styled";

export interface Member {
  role: string;
  name: string;
  department: string;
  img?: string;
}

interface RoleBlockProps {
  role: string;
  members: Member[];
}

export default function RoleBlock({ role, members }: RoleBlockProps) {
  const filteredMembers = members.filter((member) => member.role === role);

  return (
    <Container>
      <RoleTitle>{role}</RoleTitle>
      <CardGrid>
        {filteredMembers.map((member, idx) => (
          <MemberCard key={idx}>
            <Photo src={member.img} alt={member.name} />
            <p className="name">{member.name}</p>
            <p className="department">{member.department}</p>
          </MemberCard>
        ))}
      </CardGrid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const RoleTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 28px;
  text-align: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const MemberCard = styled.div`
  width: 100px;
  border-radius: 12px;
  text-align: center;

  .name {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 600;
  }

  .department {
    margin-top: 4px;
    font-size: 11px;
    font-weight: 400;
  }
`;

const Photo = styled.img`
  width: 100%;
`;
