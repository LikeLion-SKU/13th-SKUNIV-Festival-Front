import { useTranslation } from "react-i18next";
export interface Artist {
  date: "DAY 2" | "DAY 3";
  time: string;
  description: string;
  name: string;
  image: string;
}

export const useArtistList = () => {
  const { t } = useTranslation("main");

  const artistList: Artist[] = [
    {
      date: "DAY 2",
      time: "18:30 - 19:00",
      description: t("department"),
      name: t("arts_center"),
      image: "https://minio.2025skufestival.site/skufestival/booth/0dec.webp",
    },
    {
      date: "DAY 2",
      time: "19:00 - 19:30",
      description: t("club"),
      name: t("udream"),
      image: "https://minio.2025skufestival.site/skufestival/booth/9854.png",
    },
    {
      date: "DAY 2",
      time: "19:30 - 20:00",
      description: t("group"),
      name: t("iron_28"),
      image: "https://minio.2025skufestival.site/skufestival/booth/3349.webp",
    },
    {
      date: "DAY 2",
      time: "20:00 - 20:30",
      description: t("club"),
      name: t("sdr"),
      image: "https://minio.2025skufestival.site/skufestival/booth/1e64.webp",
    },
    {
      date: "DAY 2",
      time: "20:30 - 21:00",
      description: t("artist"),
      name: t("big_naughty"),
      image: "https://minio.2025skufestival.site/skufestival/booth/6542.webp",
    },
    {
      date: "DAY 2",
      time: "21:00 - 21:30",
      description: t("artist"),
      name: t("kwon_eunbi"),
      image: "https://minio.2025skufestival.site/skufestival/booth/a9ba.webp",
    },
    {
      date: "DAY 2",
      time: "21:30 - 22:00",
      description: t("artist"),
      name: t("carthegarden"),
      image: "https://minio.2025skufestival.site/skufestival/booth/bd55.webp",
    },
    {
      date: "DAY 3",
      time: "15:30 - 16:00",
      description: t("department"),
      name: t("practical_music_1"),
      image: "https://minio.2025skufestival.site/skufestival/booth/cb79.webp",
    },
    {
      date: "DAY 3",
      time: "16:00 - 16:30",
      description: t("club"),
      name: t("bandmoon"),
      image: "https://minio.2025skufestival.site/skufestival/booth/e176.webp",
    },
    {
      date: "DAY 3",
      time: "16:30 - 17:00",
      description: t("club"),
      name: t("workers"),
      image: "https://minio.2025skufestival.site/skufestival/booth/57c6.webp",
    },
    {
      date: "DAY 3",
      time: "17:00 - 17:30",
      description: t("club"),
      name: t("grami"),
      image: "https://minio.2025skufestival.site/skufestival/booth/f1fb.webp",
    },
    {
      date: "DAY 3",
      time: "17:30 - 19:30",
      description: t("department"),
      name: t("practical_music_2"),
      image: "https://minio.2025skufestival.site/skufestival/booth/04a7.webp",
    },
    {
      date: "DAY 3",
      time: "19:30 - 20:00",
      description: t("department"),
      name: t("practical_dance"),
      image: "https://minio.2025skufestival.site/skufestival/booth/ba9e.webp",
    },
    {
      date: "DAY 3",
      time: "20:30 - 21:30",
      description: t("artist"),
      name: t("yb"),
      image: "https://minio.2025skufestival.site/skufestival/booth/91cf.webp",
    },
    {
      date: "DAY 3",
      time: "21:30 - 22:00",
      description: t("artist"),
      name: t("itzy"),
      image: "https://minio.2025skufestival.site/skufestival/booth/f218.webp",
    },
    {
      date: "DAY 3",
      time: "22:00 - 23:00",
      description: t("artist"),
      name: t("pastello"),
      image: "https://minio.2025skufestival.site/skufestival/booth/2b98.webp",
    },
  ];

  return artistList;
};
