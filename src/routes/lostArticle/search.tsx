import { useEffect, useState } from "react";
import { SearchBox, InputWrapper, StyledInput, SearchIcon } from "./search.style";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import useDebounce from "../../shared/hooks/useDebounce";

interface SearchProps {
  onSearch: (name: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue);

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  useEffect(() => {
    onSearch(inputValue);
  }, [debouncedValue]);

  const { t } = useTranslation("lostandfound");

  return (
    <SearchBox>
      <InputWrapper>
        <StyledInput
          placeholder={t("search")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchIcon onClick={handleSearchClick}>
          <FiSearch size={18} />
        </SearchIcon>
      </InputWrapper>
    </SearchBox>
  );
};

export default Search;
