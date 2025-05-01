import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import logo from "@icon/likelion_logo.svg";

export default function About() {
  const navigate = useNavigate();

  return (
    <AboutWrapper>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <img className="img" src={logo} alt="logo" />
      <p className="title">SKU LIKELION 13TH</p>
      <p className="subtitle">안녕하세요, 멋쟁이사자처럼 서경대입니다.</p>
      <p className="content">
        학우분들께서 축제를 더욱 즐겁고 <br />
        편리하게 즐길 수 있도록 축제 페이지를 제작하였습니다. <br />
        여러분들께 도움이 되는 페이지가 되길 바라며, <br />
        즐거운 축제 즐기시길 바랍니다 !
      </p>
      <AboutButton onClick={() => navigate("madeby")}>제작자 보러가기</AboutButton>
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
  margin-bottom: 100px;

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

  & > .subtitle {
    font-weight: 400;
    font-size: 12px;
    margin-top: 16px;
  }

  & > .content {
    font-size: 10px;
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
  font-weight: 500;
  letter-spacing: -0.25px;
`;
