import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import { publicAPI } from "../../shared/lib/api";
import useHeader from "../../shared/hooks/useHeader";
import useDebounce from "../../shared/hooks/useDebounce";
import useLanguage from "../../shared/hooks/useLanguage";
import BoothCard from "./BoothCard";
import SearchSection from "./SearchSection";
import BoothMap from "./BoothMap";
import LocNav from "./LocNav";
import { useTranslation } from "react-i18next";

interface Booth {
  id: number;
  boothFaculty: string;
  boothThumbnailUrl: string;
  boothWaitings: number;
  boothLocation: string;
}

export default function BoothInfo() {
  const { t } = useTranslation("booth");

  useHeader({
    title: t("booth_info"),
    showBack: false,
    showHamburger: true,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery.trim());

  const [lang] = useLanguage();

  const initialLocation = searchParams.get("location") ?? t("hyein_hall");
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const [boothList, setBoothList] = useState<Booth[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchAllBooths = async () => {
      let cursor: number | null = null;
      let allBooths: Booth[] = [];

      while (true) {
        const { data } = await publicAPI.get("boothInfo", {
          params: { lang, cursor },
        });

        const fetched: Booth[] = data.data;
        allBooths = [...allBooths, ...fetched];

        if (fetched.length < 8) break;
        cursor = fetched.at(-1)?.id ?? null;
      }

      if (isMounted) setBoothList(allBooths);
    };

    if (lang) {
      fetchAllBooths();
    }

    return () => {
      isMounted = false;
    };
  }, [lang]);

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("location", selectedLocation);
      return params;
    });
  }, [selectedLocation, setSearchParams]);

  const isSearching = debouncedSearchQuery.length > 0;

  const filteredList = boothList.filter((booth) => {
    if (isSearching) {
      return booth.boothFaculty.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
    }

    const locationPrefix = booth.boothLocation.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <Wrapper>
      <SearchSection searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      {!isSearching && (
        <LocNav selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      )}
      <BoothMap
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        filteredBooths={filteredList}
        isSearching={!!isSearching}
      />
      <BoothWrapper>
        {filteredList.length > 0
          ? filteredList.map((booth) => (
              <BoothCard
                id={booth.id}
                key={booth.id}
                department={booth.boothFaculty}
                location={booth.boothLocation}
                image={booth.boothThumbnailUrl}
              />
            ))
          : isSearching && <NoResultMessage>{t("message")}</NoResultMessage>}
      </BoothWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoothWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;

const NoResultMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 20px 0;
  color: #888;
  font-size: 16px;
`;
