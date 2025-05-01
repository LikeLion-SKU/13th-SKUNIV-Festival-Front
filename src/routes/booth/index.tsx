import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { publicAPI } from "../../shared/lib/api";
import useHeader from "../../shared/hooks/useHeader";
import useLanguage from "../../shared/hooks/useLanguage";
import BoothCard from "./BoothCard";
import SearchSection from "./SearchSection";
import BoothMap from "./BoothMap";
import LocNav from "./LocNav";

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

  const [lang] = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState("혜인관");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: boothList = [] } = useQuery<Booth[]>({
    queryKey: ["boothInfo"],
    queryFn: () =>
      publicAPI.get("boothInfo", { params: { lang } }).then((response) => response.data.data),
    enabled: !!lang,
  });

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.boothLocation.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <>
      <SearchSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <LocNav selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      <BoothMap selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />

      <BoothWrapper>
        {filteredList.map((booth) => (
          <BoothCard
            key={booth.id}
            department={booth.boothFaculty}
            location={booth.boothLocation}
            image={booth.boothThumbnailUrl}
          />
        ))}
      </BoothWrapper>
    </>
  );
}

const BoothWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;
