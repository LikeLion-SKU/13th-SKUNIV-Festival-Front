import { useState } from "react";
import { SearchBox, InputWrapper, StyledInput, SearchIcon } from "./search.style";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  onSearch: (name: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <SearchBox>
      <InputWrapper>
        <StyledInput
          placeholder="분실물, 일자 검색"
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
