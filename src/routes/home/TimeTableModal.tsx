import styled from "@emotion/styled";
import { useState } from "react";
import artistList from "./ArtistList";
import close from "@icon/close.svg";
import star from "@icon/star_blue.svg";
import arrowLeft from "@icon/arrow_left_thin.svg";
import arrowRight from "@icon/arrow_right_thin.svg";

interface ModalProps {
  artist: {
    name: string;
    description: string;
    time: string;
    image: string;
    date: string;
  };
  onClose: () => void;
}

export default function TimeTableModal({ artist, onClose }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(
    artistList.findIndex((a) => a.name === artist.name)
  );

  const currentArtist = artistList[currentIndex];

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? artistList.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === artistList.length - 1 ? 0 : prev + 1));
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <img className="star" src={star} alt="star" />
          <p className="date">{currentArtist.date}</p>
          <ModalImgDiv image={currentArtist.image}>
            <ArrowButton direction="left" onClick={goLeft}>
              <img src={arrowLeft} alt="left" />
            </ArrowButton>
            <InfoWrapper>
              <p className="time">{currentArtist.time}</p>
              <p className="name">{currentArtist.name}</p>
            </InfoWrapper>
            <ArrowButton direction="right" onClick={goRight}>
              <img src={arrowRight} alt="right" />
            </ArrowButton>
          </ModalImgDiv>
        </ModalContent>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <img src={close} alt="close" />
          </CloseButton>
        </CloseButtonWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  color: #4aa3ff;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 319px;
  height: 451px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .star {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  & > .date {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.6px;
    margin-bottom: 12px;
  }
`;

const ModalImgDiv = styled.div<{ image: string }>`
  position: relative;
  height: 344px;
  width: 100%;
  border-radius: 10px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #004377 100%),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  padding-bottom: 16px;
  text-align: center;

  .time {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }

  .name {
    color: white;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.8px;
  }
`;

const ArrowButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 12px;" : "right: 12px;")}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 10px;
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #f8f8f8;
  border: none;
  border-radius: 50px;
  padding: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  cursor: pointer;
`;
