import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
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
        modules: [Autoplay],
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        effect: "slide",
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
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
  overflow: hidden;
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
  width: 100%;
  height: 100%;
  overflow: visible;

  .swiper-wrapper {
    display: flex;
    padding-left: 75px;
    align-items: center;
  }
`;
