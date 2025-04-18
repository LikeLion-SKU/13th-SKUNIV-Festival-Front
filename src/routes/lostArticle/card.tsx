import { CardWrapper, Location, DateText, Title } from "./card.style";

interface CardProps {
  location: string;
  date: string;
  title: string;
}

const Card = ({ location, date, title }: CardProps) => {
  return (
    <CardWrapper>
      <Location>
        <p>습득위치</p>
        <p>{location}</p>
      </Location>
      <DateText>{date}</DateText>
      <Title>{title}</Title>
    </CardWrapper>
  );
};

export default Card;
