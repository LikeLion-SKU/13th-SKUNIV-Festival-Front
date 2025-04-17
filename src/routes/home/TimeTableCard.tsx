import styled from "styled-components";

export const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const AboutWrapper = styled.div`
  width: 125px;
  height: 132px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ArtistTime = styled.p`
  color: #1e3dc7;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: auto;
`;

export const ArtistDescription = styled.p`
  color: #676767;
  font-size: 10px;
  font-weight: 400;
`;

export const ArtistName = styled.p`
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 700;
  justify-content: flex-end;
  line-height: 120%;
`;

export const ArtistImage = styled.div<{ image: string }>`
  width: 230px;
  height: 132px;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #121212 160%),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

interface SectionProps {
  time: string;
  description: string;
  name: string;
  image: string;
}

export default function TimeTableCard({ time, description, name, image }: SectionProps) {
  return (
    <ArtistWrapper>
      <AboutWrapper>
        <ArtistTime>{time}</ArtistTime>
        <ArtistDescription>{description}</ArtistDescription>
        <ArtistName>{name}</ArtistName>
      </AboutWrapper>
      <ArtistImage image={image} />
    </ArtistWrapper>
  );
}
