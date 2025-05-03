import { useParams } from "react-router";
import * as S from "./style";
import Instagram from "@icon/Instagram.svg?react";
import useHeader from "../../shared/hooks/useHeader";
import ReservationButton from "./ReservationButton";
import Modals from "./modals";
import ModalTransition from "../../shared/components/Modal/ModalTransition";
import { useQuery } from "@tanstack/react-query";
import { publicAPI } from "../../shared/lib/api";
import useLanguage from "../../shared/hooks/useLanguage";
import BaseResponse from "../../shared/interfaces/BaseResponse";
import DayChip from "./DayChip";
import NightChip from "./NightChip";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Select from "react-dropdown-select";

type BoothInfoResponse = {
  id: number;
  boothFaculty: string;
  boothTitle: string;
  boothDescription: string;
  boothInstagram: string;
  imageUrls: string[];
  openingHours: string;
  boothMenus: {
    menu: string;
    menuKR: string;
    menuPrice: number;
    menuOpeningHours: "DAY" | "NIGHT" | "FULL";
  }[];
};

type BoothTimeResponse = string;

export default function BoothDetail() {
  const { boothId } = useParams();
  const [lang] = useLanguage();

  const { data: response } = useQuery<BaseResponse<BoothInfoResponse>>({
    queryKey: ["boothDetail", boothId],
    queryFn: () =>
      publicAPI
        .get(`/boothInfo/${boothId}`, { params: { lang } })
        .then((response) => response.data),
    enabled: !!boothId,
  });

  useHeader({
    title: response?.data.boothFaculty!,
    showBack: true,
    showHome: true,
    canAccessAdmin: true,
  });

  const { data: times } = useQuery<BaseResponse<BoothTimeResponse>>({
    queryKey: ["boothTimes", response?.data.boothFaculty],
    queryFn: () =>
      publicAPI.get(`/booths/${response?.data.boothFaculty}`).then((response) => response.data),
    enabled: !!response?.data.boothFaculty,
  });

  const [isZoomed, setIsZoomed] = useState(true);
  const [selectedTime, setSelectedTime] = useState<{
    value: BoothInfoResponse["openingHours"];
    label: string;
  }>({ value: "DAY", label: "낮" });

  return (
    <>
      <S.Layout>
        {/* 부스 이미지 */}
        <Slider dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
          {response?.data?.imageUrls?.map((imageUrl) => (
            <S.BoothImage
              key={imageUrl}
              imgUrl={imageUrl}
              zoom={isZoomed}
              onClick={() => setIsZoomed((prev) => !prev)}
            ></S.BoothImage>
          ))}
        </Slider>

        {/* 설명 */}
        <S.InfoSection>
          <S.InfoHeader>
            <S.InfoTitle>{response?.data.boothTitle}</S.InfoTitle>
            {response?.data?.boothInstagram && (
              <S.InstagramChip
                to={`https://www.instagram.com/${response?.data.boothInstagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
                {response?.data.boothInstagram}
              </S.InstagramChip>
            )}
          </S.InfoHeader>
          <S.Chips>
            {times?.data === "DAY" && <DayChip />}
            {times?.data === "NIGHT" && <NightChip />}
            {times?.data === "FULL" && (
              <>
                <DayChip />
                <NightChip />
              </>
            )}
          </S.Chips>
        </S.InfoSection>
        <S.Description>
          {response?.data.boothDescription?.split("<br>").map((line, idx) => (
            <Fragment key={idx}>
              {line}
              <br />
            </Fragment>
          ))}
        </S.Description>
        <S.Divider />
        {/* 메뉴 */}
        <S.MenuSection>
          <S.MenuHeader>
            <S.MenuTitle>메뉴</S.MenuTitle>
            <Select
              onChange={(values) => setSelectedTime(values[0])}
              options={[
                {
                  label: "낮",
                  value: "DAY",
                },
                {
                  label: "밤",
                  value: "NIGHT",
                },
                {
                  value: "FULL",
                  label: "전체",
                },
              ]}
              values={[selectedTime]}
              multi={false}
            />
          </S.MenuHeader>
          <S.Menus>
            {response?.data?.boothMenus
              ?.filter((menu) =>
                selectedTime.value === "FULL"
                  ? true
                  : menu.menuOpeningHours === selectedTime.value || menu.menuOpeningHours === "FULL"
              )
              ?.map((menu) => (
                <S.Menu key={menu.menu}>
                  <span>
                    {menu.menu}
                    <br />
                    {menu?.menuKR && <span className="menu-kr">({menu?.menuKR})</span>}
                  </span>
                  <S.MenuPrice style={{ fontWeight: 600 }}>
                    {menu.menuPrice.toLocaleString()}원
                  </S.MenuPrice>
                </S.Menu>
              ))}
          </S.Menus>
        </S.MenuSection>
      </S.Layout>
      <ReservationButton disabled={false} />
      <ModalTransition>
        <Modals />
      </ModalTransition>
    </>
  );
}
