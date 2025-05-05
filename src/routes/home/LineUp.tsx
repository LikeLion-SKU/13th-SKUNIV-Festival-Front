import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Swiper from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import LineUpCard from "./LineUpCard";
import leftArrow from "@icon/arrow_left.svg?react";
import rightArrow from "@icon/arrow_right.svg?react";
import { useArtistList } from "./useArtistList";
import { useTranslation } from "react-i18next";

export default function LineUp() {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  const artistList = useArtistList();
  const { t } = useTranslation("main");

  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiperInstance = new Swiper(swiperContainerRef.current, {
        modules: [Autoplay, EffectCoverflow],
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        loopAdditionalSlides: 2,
        watchSlidesProgress: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 2.5,
          slideShadows: false,
        },
        spaceBetween: -200,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 600,
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
        <LeftArrow />
      </ArrowButton>

      <SwiperWrapper className="swiper" ref={swiperContainerRef}>
        <div className="swiper-wrapper">
          {artistList
            .filter((artist) => artist.description === t("artist"))
            .map((artist, i) => (
              <div className="swiper-slide" key={`${artist.name}-${i}`}>
                <LineUpCard {...artist} />
              </div>
            ))}
        </div>
      </SwiperWrapper>

      <ArrowButton onClick={() => swiperInstanceRef.current?.slideNext()}>
        <RightArrow />
      </ArrowButton>
    </LineupWrapper>
  );
}

const LineupWrapper = styled.div`
  position: relative;
  width: 375px;
  height: 283px;
  margin: 0 auto;
`;

const ArrowButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 30px" : "right: 30px")};
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const LeftArrow = styled(leftArrow)`
  width: 24px;
  height: 24px;
`;

const RightArrow = styled(rightArrow)`
  width: 24px;
  height: 24px;
`;

const SwiperWrapper = styled.div`
  overflow: visible;
  display: flex;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    will-change: transform, filter;
    transform-style: preserve-3d;
    z-index: 1;
    padding-left: 75px;
  }

  .swiper-slide:not(.swiper-slide-active) {
    filter: blur(4px);
    transform: scale(0.5);
    z-index: 1;
  }

  .swiper-slide-active {
    filter: none;
    transform: scale(1);
    z-index: 3;
  }
`;
