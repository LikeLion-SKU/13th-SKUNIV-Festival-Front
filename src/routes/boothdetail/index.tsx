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
  }[];
};

export default function BoothDetail() {
  const { boothId } = useParams();
  const [lang] = useLanguage();
  const { data: response } = useQuery<BaseResponse<BoothInfoResponse>>({
    queryKey: ["boothDetail"],
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

  return (
    <>
      <S.Layout>
        {/* 부스 이미지 */}
        <S.BoothImage imgUrl="https://i.imgur.com/NvoBOIH.png"></S.BoothImage>
        {/* 설명 */}
        <S.InfoSection>
          <S.InfoHeader>
            <S.InfoTitle>{response?.data.boothTitle}</S.InfoTitle>
            <S.InstagramChip
              to={`https://www.instagram.com/${response?.data.boothInstagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              {response?.data.boothInstagram}
            </S.InstagramChip>
          </S.InfoHeader>
        </S.InfoSection>
        <S.Description>{response?.data.boothDescription}</S.Description>
        <S.Divider />
        {/* 메뉴 */}
        <S.MenuSection>
          <S.MenuTitle>메뉴</S.MenuTitle>
          <S.Menus>
            {response?.data?.boothMenus?.map((menu) => (
              <S.Menu key={menu.menuKR}>
                <span>
                  {menu.menu}
                  <br />
                  {menu?.menuKR && <span className="menu-kr">({menu?.menuKR})</span>}
                </span>
                <span style={{ fontWeight: 600 }}>{menu.menuPrice}원</span>
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
