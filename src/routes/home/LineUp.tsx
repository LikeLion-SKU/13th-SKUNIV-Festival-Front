import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import LineUpCard from "./LineUpCard";
import artistList from "./ArtistList";
import leftArrow from "@icon/arrow_left.svg";
import rightArrow from "@icon/arrow_right.svg";

export default function LineUp() {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiperInstance = new Swiper(swiperContainerRef.current, {
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: -30,
          slideShadows: true,
        },
        spaceBetween: 20,
      });

      swiperInstanceRef.current = swiperInstance;

      return () => {
        swiperInstance.destroy();
      };
    }
  }, []);

  return (
    <LineupWrapper>
      <ArrowButton $left onClick={() => swiperInstanceRef.current?.slidePrev()}>
        <img src={leftArrow} alt="이전" />
      </ArrowButton>

      <SwiperWrapper className="swiper" ref={swiperContainerRef}>
        <div className="swiper-wrapper">
          {artistList.map((artist, i) => (
            <div className="swiper-slide" key={`${artist.name}-${i}`}>
              <LineUpCard {...artist} />
            </div>
          ))}
        </div>
      </SwiperWrapper>

      <ArrowButton onClick={() => swiperInstanceRef.current?.slideNext()}>
        <img src={rightArrow} alt="다음" />
      </ArrowButton>
    </LineupWrapper>
  );
}

const LineupWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 283px;
  overflow: hidden;
  margin: 0 auto;
`;

const ArrowButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 45px" : "right: 45px")};
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 24px;
    height: 24px;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;

  .swiper-wrapper {
    display: flex;
    padding-left: 82px;
    align-items: center;
  }
`;
