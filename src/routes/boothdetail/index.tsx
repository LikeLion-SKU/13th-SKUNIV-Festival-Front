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
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Br from "../../shared/components/Br";
import ArrowDown from "@icon/arrow-down.svg?react";
import { useTranslation } from "react-i18next";
import { useBreakTime } from "../../shared/hooks/useBreakTime";

type BoothInfoResponse = {
  id: number;
  boothFaculty: string;
  boothTitle: string;
  boothDescription: string;
  boothInstagram: string;
  imageUrls: string[];
  openingHours: string;
  serviceAgreement: boolean;
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
  const { t } = useTranslation("booth");

  const DROPDOWN_TIMES = [
    {
      value: "day_menu",
      label: t("day_menu"),
    },
    {
      value: "night_menu",
      label: t("night_menu"),
    },
    {
      value: "all_menu",
      label: t("all_menu"),
    },
  ];

  const { data: response } = useQuery<BaseResponse<BoothInfoResponse>>({
    queryKey: ["boothDetail", boothId, lang],
    queryFn: () =>
      publicAPI
        .get(`/boothInfo/${boothId}`, { params: { lang } })
        .then((response) => response.data),
    enabled: !!boothId,
  });

  useHeader({
    title: response?.data?.boothFaculty ? response.data.boothFaculty : null,
    showBack: true,
    showHamburger: true,
    canAccessAdmin: true,
  });

  const { data: times } = useQuery<BaseResponse<BoothTimeResponse>>({
    queryKey: ["boothTimes", boothId, lang],
    queryFn: () => publicAPI.get(`/booths/${boothId}`).then((response) => response.data),
    enabled: !!boothId,
  });

  const [isZoomed, setIsZoomed] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<(typeof DROPDOWN_TIMES)[number]>();

  const dayTime = useBreakTime("10:00", "16:30");
  const nightTime = useBreakTime("17:00", "22:59");

  useEffect(() => {
    let menu: string;

    if (dayTime) {
      menu = "day_menu";
    } else if (nightTime) {
      menu = "night_menu";
    } else {
      menu = "all_menu";
    }

    setSelectedTime({
      value: menu,
      label: t(menu),
    });
  }, [lang]);

  const filteredMenus = response?.data?.boothMenus
    ?.filter((menu) =>
      selectedTime?.value === "all_menu"
        ? true
        : menu.menuOpeningHours === selectedTime?.value.replace("_menu", "").toUpperCase() ||
          menu.menuOpeningHours === "FULL"
    )
    .sort((a, b) => a.menuPrice - b.menuPrice); //오름차순

  return (
    <>
      <S.Layout>
        {/* 부스 이미지 */}
        {response?.data?.imageUrls ? (
          <Slider dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
            {response?.data?.imageUrls?.map((imageUrl) => (
              <S.BoothImage
                key={imageUrl}
                imgUrl={imageUrl}
                zoom={isZoomed}
                onClick={() => setIsZoomed((prev) => !prev)}
              />
            ))}
          </Slider>
        ) : null}

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
          <Br content={response?.data.boothDescription} />
        </S.Description>
        <S.Divider />
        {/* 메뉴 */}
        <S.MenuSection>
          <S.MenuHeader>
            <S.MenuTitle>{t("menu")}</S.MenuTitle>
            <S.SelectWrapper>
              <S.Select onClick={() => setIsDropdownOpen((prev) => !prev)} opened={isDropdownOpen}>
                {selectedTime?.label}
                <ArrowDown style={{ transform: isDropdownOpen ? "rotate(180deg)" : undefined }} />
              </S.Select>
              {isDropdownOpen && (
                <S.Options>
                  {DROPDOWN_TIMES.filter((t) => t.value !== selectedTime?.value).map((t, idx) => (
                    <S.Option
                      key={t.value}
                      value={t.value}
                      last={idx <= DROPDOWN_TIMES.length - 1}
                      onClick={() => {
                        setSelectedTime({
                          label: t.label,
                          value: t.value,
                        });
                        setIsDropdownOpen(false);
                      }}
                    >
                      {t.label}
                    </S.Option>
                  ))}
                </S.Options>
              )}
            </S.SelectWrapper>
          </S.MenuHeader>
          {filteredMenus && filteredMenus?.length > 0 ? (
            <S.Menus rows={Math.ceil(filteredMenus.length / 2)}>
              {filteredMenus.map((menu) => (
                <S.Menu key={`${menu.menu}${menu.menuPrice}`}>
                  <span>
                    <Br content={menu.menu} />
                    {menu?.menuKR && (
                      <span className="menu-kr">
                        <Br content={menu?.menuKR} />
                      </span>
                    )}
                  </span>
                  <S.MenuPrice style={{ fontWeight: 600 }}>
                    {menu.menuPrice.toLocaleString("ko")}
                  </S.MenuPrice>
                </S.Menu>
              ))}
            </S.Menus>
          ) : (
            <div>{t("no_menu")}</div>
          )}
        </S.MenuSection>
      </S.Layout>
      <ReservationButton disabled={!response?.data?.serviceAgreement} />
      <ModalTransition>
        <Modals />
      </ModalTransition>
    </>
  );
}
