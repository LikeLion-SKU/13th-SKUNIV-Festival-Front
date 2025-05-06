import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { publicAPI } from "../../shared/lib/api";
import useLanguage from "../../shared/hooks/useLanguage";
import BoothCard from "../booth/BoothCard";
import { useTranslation } from "react-i18next";

interface Booth {
  id: number;
  boothFaculty: string;
  boothThumbnailUrl: string;
  boothWaitings: number;
  boothLocation: string;
}

export default function Booth() {
  const { t } = useTranslation("main");

  const [lang] = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<string>();
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
      setSelectedLocation(t("hyein_hall"));
    }

    return () => {
      isMounted = false;
    };
  }, [lang]);

  const filteredList = boothList.filter((booth) => {
    const locationPrefix = booth.boothLocation.split(" ")[0];
    return locationPrefix === selectedLocation;
  });

  return (
    <Wrapper>
      <NavWrapper>
        <NavBtn
          selected={selectedLocation === t("hyein_hall")}
          onClick={() => setSelectedLocation(t("hyein_hall"))}
        >
          {t("hyein_hall")}
        </NavBtn>

        <NavBtn
          selected={selectedLocation === t("eunju_hall_1")}
          onClick={() => setSelectedLocation(t("eunju_hall_1"))}
        >
          {t("eunju_hall_1")}
        </NavBtn>
        <NavBtn
          selected={selectedLocation === t("eunju_hall_2")}
          onClick={() => setSelectedLocation(t("eunju_hall_2"))}
        >
          {t("eunju_hall_2")}
        </NavBtn>
        <NavBtn
          selected={selectedLocation === t("cheongun_hall")}
          onClick={() => setSelectedLocation(t("cheongun_hall"))}
        >
          {t("cheongun_hall")}
        </NavBtn>
        <NavBtn
          selected={selectedLocation === t("daeil_hall")}
          onClick={() => setSelectedLocation(t("daeil_hall"))}
        >
          {t("daeil_hall")}
        </NavBtn>
      </NavWrapper>
      <BoothWrapper>
        {filteredList.map((booth) => (
          <BoothCard
            id={booth.id}
            key={booth.id}
            department={booth.boothFaculty}
            location={booth.boothLocation}
            image={booth.boothThumbnailUrl}
          />
        ))}
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

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const NavBtn = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 57px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1.3px solid #fff;
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  color: ${(props) => (props.selected ? "#4AA4FF" : "#fff")};
  font-weight: 500;
  font-size: 11px;
  border-radius: 50px;
  cursor: pointer;
`;
