import styled from "@emotion/styled";
import loc from "@icon/location.svg?react";
import { useTranslation } from "react-i18next";

export default function Emergency() {
  const { t } = useTranslation("main");

  const emergencyList = [
    {
      subtitle: t("aed_info"),
      location: [
        t("bukak_lobby"),
        t("yudam_sports"),
        t("yudam_9f_entrance"),
        t("cheongun_safeone"),
        t("hyein_lobby"),
      ],
    },
    {
      subtitle: t("evacuation_guide"),
      location: [t("hill_of_storms"), t("hyecheongsa"), t("direction_daeil")],
    },
  ];

  return (
    <Container>
      {emergencyList.map((item, index) => (
        <CardWrapper key={index}>
          <Subtitle>{item.subtitle}</Subtitle>
          <LocationBox>
            {item.location.map((locItem, idx) => (
              <LocationItem key={idx}>
                <Icon />
                <span className="text">{locItem}</span>
              </LocationItem>
            ))}
          </LocationBox>
        </CardWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
`;

const CardWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.div`
  border-bottom: 1px solid #3c3e3a;
  color: #576141;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  width: auto;
  padding-bottom: 2px;
  margin-bottom: 16px;
`;

const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-weight: 500;
`;

const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & > .text {
    font-size: 10px;
    color: #484848;
  }
`;

const Icon = styled(loc)`
  width: 10px;
  height: auto;
`;
