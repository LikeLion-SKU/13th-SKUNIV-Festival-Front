import styled from "@emotion/styled";
import Search from "@icon/search.svg?react";
import { useTranslation } from "react-i18next";

interface Props {
  searchQuery: string;
  onSearchQueryChange: (term: string) => void;
}

export default function SearchSection({ searchQuery, onSearchQueryChange }: Props) {
  const { t } = useTranslation("booth");

  return (
    <Wrapper>
      <SearchBox
        type="search"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value)}
        placeholder={t("search")}
      />
      <SearchIcon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  max-width: 768px;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 50px;
  background-color: #f5f5f5;
  padding: 0 40px 0 15px;
  font-size: 15px;
  color: #1a1a1a;
  font-weight: 500;
  border: none;
  outline: none;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;
