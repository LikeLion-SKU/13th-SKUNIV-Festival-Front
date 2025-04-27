import useHeader from "../../shared/hooks/useHeader";
import * as S from "./style";

import SearchIcon from "../../shared/assets/icon/search.svg?react";
import Card from "./Card";

const DUMMY = [
  {
    id: 0,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 1,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 2,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 3,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 4,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 5,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 6,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 7,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
  {
    id: 8,
    booth_thumbnail_url: "https://i.imgur.com/NvoBOIH.png",
    booth_waitings: 13,
    booth_faculty: "디자인학부",
  },
];

export default function Tabling() {
  useHeader({ title: "부스 테이블링" });

  return (
    <S.Layout>
      {/* 학과 부스 검색 */}
      <S.Search>
        <S.SearchInput type="search" placeholder="학과 부스 검색" />
        <SearchIcon />
      </S.Search>
      {/* 그리드 */}
      <S.Grid>
        {DUMMY.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </S.Grid>
    </S.Layout>
  );
}
