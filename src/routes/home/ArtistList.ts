import artistImg from "@image/artists/artist_sample.png";
import bandmoon from "@image/artists/bandmoon.webp";
import bignaughty from "@image/artists/bignaughty.webp";
import carthegarden from "@image/artists/carthegarden.webp";
import DJ from "@image/artists/DJ.webp";
import eunbi from "@image/artists/eunbi.webp";
import grammy from "@image/artists/grammy.webp";
import itzy from "@image/artists/itzy.webp";
import sdr from "@image/artists/SDR.webp";
import udream from "@image/artists/udream.webp";
import workers from "@image/artists/workers.webp";
import YB from "@image/artists/YB.webp";

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
    time: "18:30 - 19:00",
    description: "학과 공연",
    name: "예교원 공연",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "19:00 - 19:30",
    description: "동아리 공연",
    name: "유드림",
    image: udream,
  },
  {
    date: "DAY 2",
    time: "19:30 - 20:00",
    description: "소모임 공연",
    name: "철인 28호",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "20:00 - 20:30",
    description: "동아리 공연",
    name: "SDR",
    image: sdr,
  },
  {
    date: "DAY 2",
    time: "20:30 - 21:00",
    description: "아티스트 축하공연",
    name: "빅나티",
    image: bignaughty,
  },
  {
    date: "DAY 2",
    time: "21:00 - 21:30",
    description: "아티스트 축하공연",
    name: "권은비",
    image: eunbi,
  },
  {
    date: "DAY 2",
    time: "21:30 - 22:00",
    description: "아티스트 축하공연",
    name: "카더가든",
    image: carthegarden,
  },
  {
    date: "DAY 3",
    time: "15:30 - 16:00",
    description: "학과 공연",
    name: "실용음악 공연 (1)",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "16:00 - 16:30",
    description: "동아리 공연",
    name: "밴드문",
    image: bandmoon,
  },
  {
    date: "DAY 3",
    time: "16:30 - 17:00",
    description: "동아리 공연",
    name: "워커스",
    image: workers,
  },
  {
    date: "DAY 3",
    time: "17:00 - 17:30",
    description: "동아리 공연",
    name: "그라미",
    image: grammy,
  },
  {
    date: "DAY 3",
    time: "17:30 - 19:30",
    description: "학과 공연",
    name: "실용음악 공연 (2)",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "19:30 - 20:00",
    description: "학과 공연",
    name: "실용무용 공연",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "20:30 - 21:30",
    description: "아티스트 축하공연",
    name: "YB",
    image: YB,
  },
  {
    date: "DAY 3",
    time: "21:30 - 22:00",
    description: "아티스트 축하공연",
    name: "ITZY",
    image: itzy,
  },
  {
    date: "DAY 3",
    time: "21:30 - 22:00",
    description: "DJ 무대",
    name: "Pastello",
    image: DJ,
  },
];

export default artistList;
