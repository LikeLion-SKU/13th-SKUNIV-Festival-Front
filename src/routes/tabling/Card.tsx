import { useTranslation } from "react-i18next";
import { BoothResponse } from ".";
import Br from "../../shared/components/Br";
import * as S from "./Card.style";

interface CardProps {
  data: BoothResponse;
}

const Card = ({ data }: CardProps) => {
  const { t } = useTranslation("booth");

  return (
    <S.Container imgurl={data.boothThumbnailUrl} to={`/booth/${data.id}`}>
      <S.Info>
        {t("waiting")} | <S.Waitings>{data.boothWaitings ?? "?"}</S.Waitings>
        <br />
        <S.Faculty>
          <Br content={data.boothFaculty} />
        </S.Faculty>
      </S.Info>
    </S.Container>
  );
};

export default Card;
