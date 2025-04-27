import { useParams } from "react-router";
import useHeaderStore from "../../shared/stores/useHeaderStore";
import { useEffect } from "react";
import styled from "styled-components";
import insta from "@icon/Instagram.svg";

export default function BoothMenu() {
  const { department } = useParams();
  const updateHeader = useHeaderStore((state) => state.update);

  useEffect(() => {
    updateHeader({
      title: `${department}`,
      showBack: true,
      showHome: true,
    });
  }, [department, updateHeader]);

  const ImgSection = styled.div``;

  const AboutSection = styled.div`
    padding-bottom: 20px;
    border-bottom: 4px solid #f6f6f6;
    color: #1a1a1a;

    & > .description {
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: -0.3px;
    }
  `;

  const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18px;

    & > .title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
  `;

  const InstaLink = styled.div`
    width: 75px;
    height: 20px;
    border-radius: 50px;
    border: 1px solid #d1d1d1;
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    justify-content: center;
    font-size: 8.2px;
    font-weight: 400;
    margin-top: 5px;
  `;

  return (
    <>
      <ImgSection></ImgSection>
      <AboutSection>
        <TitleDiv>
          <p className="title">{department} 주점 오픈</p>
          <InstaLink
            // onClick={() => window.open(`https://www.instagram.com/${insta_id}/`, "_blank")}
            onClick={() => window.open(`https://www.instagram.com/sku.design_/`, "_blank")}
          >
            <img src={insta} />
            {/* {insta_id} */}
            sku.design_
          </InstaLink>
        </TitleDiv>
        {/* <p className="description">{description}</p> */}
        <p className="description">
          description
          <br />
          어쩌구저쩌구
        </p>
      </AboutSection>
    </>
  );
}
