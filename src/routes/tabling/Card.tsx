import * as S from "./Card.style";

interface CardProps {
  data: {
    id: number;
    booth_thumbnail_url: string;
    booth_waitings: number;
    booth_faculty: string;
  };
}

const Card = ({ data }: CardProps) => {
  return (
    <S.Container imgUrl={data.booth_thumbnail_url}>
      <S.Info>
        대기 | <S.Waitings>{data.booth_waitings}팀</S.Waitings>
        <br />
        <S.Faculty>{data.booth_faculty}</S.Faculty>
      </S.Info>
    </S.Container>
  );
};

export default Card;
