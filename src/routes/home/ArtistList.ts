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
    description: "BIG Naughty",
    name: "빅나티",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "18:30 - 19:00",
    description: "KWON EUNBI",
    name: "권은비",
    image: artistImg,
  },
  {
    date: "DAY 2",
    time: "19:00 - 19:30",
    description: "Carthegarden",
    name: "카더가든",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "17:00 - 18:00",
    description: "YB",
    name: "윤도현 밴드",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:00 - 18:30",
    description: "ITZY",
    name: "있지",
    image: artistImg,
  },
  {
    date: "DAY 3",
    time: "18:30 - 19:00",
    description: "디제이 설명",
    name: "DJ Patello",
    image: artistImg,
  },
];

export default artistList;
