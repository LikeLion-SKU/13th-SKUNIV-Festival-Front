import { useState, useEffect } from "react";
import useHeader from "../../shared/hooks/useHeader";
import BoothCard from "./BoothCard";
import SearchSection from "./SearchSection";
import BoothMap from "./BoothMap";
import LocNav from "./LocNav";
import { fetchBoothInfo } from "./boothAPI";

interface Booth {
  id: number;
  boothFaculty: string;
  boothThumbnailUrl: string;
  boothWaitings: number;
  boothLocation: string;
}

export default function BoothInfo() {
  useHeader({
    title: "부스 안내",
    showBack: true,
    showHome: true,
  });

  const [boothList, setBoothList] = useState<Booth[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("혜인관");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadBoothInfo = async () => {
      const lang = localStorage.getItem("selectedLang") || "ko";
      const data = await fetchBoothInfo(lang);
      setBoothList(data);
    };

    loadBoothInfo();
  }, []);

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.boothLocation.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <>
      <SearchSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <LocNav selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      <BoothMap selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />

      {filteredList.map((booth) => (
        <BoothCard
          key={booth.id}
          department={booth.boothFaculty}
          location={booth.boothLocation}
          image={booth.boothThumbnailUrl}
        />
      ))}
    </>
  );
}
