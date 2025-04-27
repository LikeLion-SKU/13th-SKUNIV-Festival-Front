import { useState } from "react";
import boothImg from "@image/booth_sample2.png";
import useHeader from "../../shared/hooks/useHeader";
import BoothCard from "./BoothCard";
import SearchSection from "./SearchSection";
import BoothMap from "./BoothMap";
import LocNav from "./LocNav";

const boothList = [
  { department: "컴퓨터공학과", location: "대일관 좌측", image: boothImg },
  { department: "디자인학부", location: "대일관 좌측", image: boothImg },
  { department: "소프트웨어학과", location: "은주2관 우측", image: boothImg },
  { department: "도시공학과", location: "은주1관 우측", image: boothImg },
  { department: "경영학과", location: "은주1관 중앙", image: boothImg },
  { department: "저쩌구학과", location: "청운관 중앙", image: boothImg },
  { department: "어쩌구학과", location: "혜인관 중앙", image: boothImg },
];

export default function BoothInfo() {
  useHeader({
    title: "부스 안내",
    showBack: true,
    showHome: true,
  });

  const [selectedLocation, setSelectedLocation] = useState("혜인관");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.location.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <>
      <SearchSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <LocNav selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      <BoothMap selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />

      {filteredList.map((booth, index) => (
        <BoothCard
          key={index}
          department={booth.department}
          location={booth.location}
          image={booth.image}
        />
      ))}
    </>
  );
}
