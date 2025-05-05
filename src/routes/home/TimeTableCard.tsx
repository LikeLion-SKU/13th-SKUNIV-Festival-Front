import styled from "@emotion/styled";

interface CardProps {
  time: string;
  description: string;
  name: string;
  image: string;
  onClick?: () => void;
}

export default function TimeTableCard({ time, description, name, image, onClick }: CardProps) {
  return (
    <ArtistWrapper onClick={onClick}>
      <AboutWrapper>
        <ArtistTime>{time}</ArtistTime>
        <ArtistDescription>{description}</ArtistDescription>
        <ArtistName>
          {name.split("<br>").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </ArtistName>
      </AboutWrapper>
      <ArtistImage image={image} />
    </ArtistWrapper>
  );
}

export const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
`;

export const AboutWrapper = styled.div`
  flex: 1;
  padding: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 132px;
  width: 125px;
  box-sizing: border-box;
`;

export const ArtistTime = styled.p`
  color: #1e3dc7;
  font-size: 10px;
  font-weight: 500;
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
  font-weight: 600;
  justify-content: flex-end;
  line-height: 120%;
`;

export const ArtistImage = styled.div<{ image: string }>`
  flex-shrink: 0;
  width: 230px;
  height: auto;
  aspect-ratio: 230 / 132;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
