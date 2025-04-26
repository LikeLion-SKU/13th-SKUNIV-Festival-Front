import artistImg from "@image/artist_sample.png";

export interface Artist {
  date: "DAY 2" | "DAY 3";
  time: string;
  description: string;
  name: string;
  image: string;
}

const artistList: Artist[] = [
  {
    date: "DAY 2",
    time: "18:00 - 18:30",
    description: "경영학과 밴드",
    name: "워워커스",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "18:30 - 19:00",
    description: "나씨밴 오라오라",
    name: "나상현씨 밴드",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "19:00 - 19:30",
    description: "모카님 ㅠㅜ",
    name: "아일릿",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "17:00 - 18:00",
    description: "힙합 공연 동아리",
    name: "SDR",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:00 - 18:30",
    description: "경영학과 밴드",
    name: "뭐뭐뭐뭐",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:30 - 19:00",
    description: "경영학과 밴드",
    name: "유다빈 밴드",
    image: artistImg,
  },
];

export default artistList;
