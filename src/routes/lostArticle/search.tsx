import { SearchBox, InputWrapper, StyledInput, SearchIcon } from "./search.style";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <SearchBox>
      <InputWrapper>
        <StyledInput placeholder="분실물, 일자 검색" />
        <SearchIcon>
          <FiSearch size={18} />
        </SearchIcon>
      </InputWrapper>
    </SearchBox>
  );
};

export default Search;
