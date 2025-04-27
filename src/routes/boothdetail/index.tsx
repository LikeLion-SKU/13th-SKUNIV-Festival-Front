import { useParams } from "react-router";
import * as S from "./style";
import Instagram from "@icon/Instagram.svg?react";
import useHeader from "../../shared/hooks/useHeader";
import ReservationButton from "./ReservationButton";
import Modals from "./modals";

const menus = [
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuKR: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
  {
    id: 0,
    menu: "군고구마",
    menuPrice: 3000,
  },
];

export default function BoothDetail() {
  const { boothId } = useParams();
  useHeader({
    title: "컴퓨터공학과",
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
            <S.InfoTitle>디자인 주점 오픈</S.InfoTitle>
            <S.InstagramChip to="https://www.instagram.com/sku.design_/">
              <Instagram />
              sku.design_
            </S.InstagramChip>
          </S.InfoHeader>
        </S.InfoSection>
        <S.Description>
          여기에는 각 학과의 원하는 말을 쓰면 될 것 같습니다 예를 들면 우리는 당신들을 위해 뭘
          준비했다~! 우리 부스에는 어떤 게임도 있지롱 과 같은 간략하게 학과에서 쓰고싶은 멘트, 혹은
          학생회 인스타 게시글의 멘트를 작성하는 곳을 사용하면 좋을 것 같습니다 / 몇시부터 몇시까지
          등..
        </S.Description>
        <S.Divider />
        {/* 메뉴 */}
        <S.MenuSection>
          <S.MenuTitle>메뉴</S.MenuTitle>
          <S.Menus>
            {menus.map((menu, index) => (
              <S.Menu key={index}>
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
      <Modals />
    </>
  );
}
