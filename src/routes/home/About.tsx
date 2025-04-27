import styled from "styled-components";
import logo from "@icon/likelion_logo.svg";

export default function About() {
  return (
    <AboutWrapper>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <img className="img" src={logo} alt="logo" />
      <p className="title">SKU LIKELION 13TH</p>
      <p className="content">
        안녕하세요 여러분 즐거운 축제 즐기시고요 멋사 좋으니까 지원하세요 아, 근데 내년에요 아래는
        제작자보는 버튼이니까요 눌러주세요 안녕하세요 여러분 즐거운 축제 즐기시고요 멋사 좋으니까
        지원하세요 아, 근데 내년에요 아래는 제작자보는 버튼이니까요 눌러주세요안녕하세요 여러분
        즐거운 축제 즐기시
      </p>
      <AboutButton>제작자 보러가기</AboutButton>
      <AboutButton onClick={() => window.open("https://skulikelion.com/")}>
        멋사 홈페이지 보러가기
      </AboutButton>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 318px;
  margin-bottom: 200px;

  & > .dot {
    font-size: 20px;
    font-weight: 800;
    line-height: 110%;
  }

  & > .img {
    margin-top: 12px;
    margin-bottom: 20px;
    width: 110px;
    height: 120px;
  }

  & > .title {
    font-family: "Syncopate-Bold";
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.72px;
  }

  & > .content {
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 30px;
  }
`;

const AboutButton = styled.button`
  color: white;
  background-color: #1e3dc7;
  border-radius: 15px;
  height: 30px;
  border: none;
  margin-bottom: 7px;
  padding: 0 14px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.25px;
`;
