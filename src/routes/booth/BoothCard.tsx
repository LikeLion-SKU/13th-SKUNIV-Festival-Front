import styled from "@emotion/styled";
import { Link } from "react-router";

const Card = styled.div<{ image: string }>`
  width: 350px;
  height: 190px;
  padding: 21px;
  border-radius: 12px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 48.69%),
    url(${(props) => props.image});

  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  margin-bottom: 12px;

  & > .location {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > .department {
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.602px;
  }

  & > .arrow {
    font-size: 32px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.5px;
    line-height: 80%;
  }
`;

interface BoothProps {
  id: number;
  location: string;
  department: string;
  image: string;
}

export default function BoothCard({ id, image, location, department }: BoothProps) {
  return (
    <Link to={`/booth/${id}`} style={{ textDecoration: "none" }}>
      <Card image={image}>
        <p className="location">{location}</p>
        <TextBox>
          <p className="department">{department}</p>
          <p className="arrow">&gt;</p>
        </TextBox>
      </Card>
    </Link>
  );
}
