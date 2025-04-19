import styled from "styled-components";

interface LineUpCardProps {
  image: string;
  date: string;
  name: string;
  time: string;
  description: string;
  isCenter: boolean;
}

const Card = styled.div<{ image: string; $isCenter: boolean }>`
  scroll-snap-align: center;
  flex: 0 0 auto;

  width: 227px;
  height: 283px;
  margin: 0 -80px;
  padding: 16px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.12) 35.1%, #000 100%),
    url(${(props) => props.image});

  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;

  filter: ${(props) => (props.$isCenter ? "none" : "blur(2px)")};
  transform: ${(props) => (props.$isCenter ? "scale(1)" : "scale(0.8)")};
  z-index: ${(props) => (props.$isCenter ? 3 : 1)};
  transition: transform 0.3s ease, filter 0.3s ease, z-index 0.3s ease;
`;

const TextBox = styled.div`
  & > .date {
    color: #ff9bad;
  }
`;

const ArtistText16 = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
`;

const ArtistText10 = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 140%;
  margin-right: 3px;
`;

const Button = styled.button`
  width: 62px;
  height: 20px;
  border-radius: 5px;
  padding: 2px 0px;
  background-color: #ff9bad;
  color: white;
  font-size: 8px;
  font-weight: 700;
  line-height: 130%;
  cursor: pointer;
  border: none;
`;

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
`;

export default function LineUpCard({
  image,
  date,
  name,
  time,
  description,
  isCenter,
}: LineUpCardProps) {
  return (
    <Card image={image} $isCenter={isCenter}>
      <TextBox>
        <ArtistText16 className="date">{date}</ArtistText16>
        <VerticalDiv>
          <ArtistText16>{name}</ArtistText16>
          <Button>상세 보기</Button>
        </VerticalDiv>
        <VerticalDiv>
          <ArtistText10>{description}</ArtistText10>
          <ArtistText10>{time}</ArtistText10>
        </VerticalDiv>
      </TextBox>
    </Card>
  );
}
