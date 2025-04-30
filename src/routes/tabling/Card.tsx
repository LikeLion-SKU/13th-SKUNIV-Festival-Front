import { BoothResponse } from ".";
import * as S from "./Card.style";

interface CardProps {
  data: BoothResponse;
}

const Card = ({ data }: CardProps) => {
  return (
    <S.Container imgurl={data.boothThumbnailUrl} to={`/booth/${data.id}`}>
      <S.Info>
        대기 | <S.Waitings>{data.boothWaitings ?? "?"}팀</S.Waitings>
        <br />
        <S.Faculty>{data.boothFaculty}</S.Faculty>
      </S.Info>
    </S.Container>
  );
};

export default Card;
