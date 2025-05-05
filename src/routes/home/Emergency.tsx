import styled from "@emotion/styled";
import loc from "@icon/location.svg?react";

export default function Emergency() {
  const emergencyList = [
    {
      subtitle: "AED 위치 안내",
      location: [
        "북악관 로비 내",
        "유담관 스포렉스",
        "유담관 9층 출입문 옆",
        "청운관 2층 세이프원 상황실",
        "혜인관 1층 로비",
      ],
    },
    {
      subtitle: "대피로 안내",
      location: ["폭풍의 언덕", "혜청사 (혜인관 청운관 사이)", "혜인관, 은주관 사이 대일외고 방향"],
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
