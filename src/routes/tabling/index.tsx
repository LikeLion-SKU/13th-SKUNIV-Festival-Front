import useHeader from "../../shared/hooks/useHeader";
import * as S from "./style";

import SearchIcon from "../../shared/assets/icon/search.svg?react";
import Card from "./Card";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { publicAPI } from "../../shared/lib/api";
import useLanguage from "../../shared/hooks/useLanguage";
import BaseResponse from "../../shared/interfaces/BaseResponse";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useDebounce from "../../shared/hooks/useDebounce";
import { useTranslation } from "react-i18next";

export interface BoothResponse {
  id: number;
  boothFaculty: string;
  boothThumbnailUrl: string;
  boothWaitings: number;
  boothLocation: string;
  working: boolean;
  serviceAgreement: boolean;
}

export default function Tabling() {
  const { t } = useTranslation(["booth", "ui"]);

  useHeader({ title: t("ui:booth_tabling"), showHamburger: true });

  const { ref, inView } = useInView();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);

  const [lang] = useLanguage();
  const { data: response, fetchNextPage } = useInfiniteQuery<BaseResponse<BoothResponse[]>>({
    queryKey: ["boothInfo", debouncedSearchQuery],
    queryFn: ({ pageParam: cursor }) =>
      publicAPI
        .get(searchQuery.length > 0 ? "boothInfo/search" : "boothInfo", {
          params: {
            lang,
            serviceAgreement: true,
            cursor,
            ...(searchQuery ? { facultyName: searchQuery } : {}),
          },
        })
        .then((response) => response.data),
    enabled: !!lang,
    initialPageParam: null,
    getNextPageParam: (lastPage) =>
      lastPage.data.length < 8 ? undefined : lastPage.data[lastPage.data.length - 1]?.id,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <S.Layout>
      {/* 학과 부스 검색 */}
      <S.Search>
        <S.SearchInput
          type="search"
          placeholder={t("booth:search")}
          onChange={(e) => setSearchQuery(e.target.value.trim())}
        />
        <SearchIcon />
      </S.Search>
      {/* 그리드 */}
      <S.Grid>
        {response?.pages
          .flatMap((page) => page.data)
          ?.map((data) => (
            <Card key={data.id} data={data} />
          ))}
      </S.Grid>
      <div ref={ref}></div>
    </S.Layout>
  );
}
