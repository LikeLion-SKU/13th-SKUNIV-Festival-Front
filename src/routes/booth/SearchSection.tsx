import styled from "@emotion/styled";
import searchIcon from "@icon/search.svg";

interface Props {
  searchQuery: string;
  onSearchQueryChange: (term: string) => void;
}

export default function SearchSection({ searchQuery, onSearchQueryChange }: Props) {
  return (
    <Wrapper>
      <SearchBox
        type="search"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value.trim())}
        placeholder="학과 부스 검색"
      />
      <SearchIcon src={searchIcon} alt="search" />
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

const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;
