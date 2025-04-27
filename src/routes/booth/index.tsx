import { useEffect, useState } from "react";
import useHeaderStore from "../../shared/stores/useHeaderStore";
import boothImg from "@image/booth_sample2.png";
import BoothCard from "./BoothCard";
import SearchSection from "./SearchSection";

const boothList = [
  { department: "컴퓨터공학과", location: "유담관 좌측", image: boothImg },
  { department: "디자인학부", location: "유담관 좌측", image: boothImg },
  { department: "소프트웨어학과", location: "은주2관 우측", image: boothImg },
  { department: "도시공학과", location: "은주1관 우측", image: boothImg },
  { department: "경영학과", location: "은주1관 중앙", image: boothImg },
  { department: "뀨뀨학과", location: "청운관 중앙", image: boothImg },
  { department: "어쩌구학과", location: "혜인관 중앙", image: boothImg },
];

export default function BoothInfo() {
  const updateHeader = useHeaderStore((state) => state.update);

  useEffect(() => {
    updateHeader({
      title: "부스 안내",
      showBack: true,
      showHome: true,
    });
  }, [updateHeader]);

  const [selectedLocation, setSelectedLocation] = useState("유담관");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.location.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <>
      <SearchSection
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />
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
