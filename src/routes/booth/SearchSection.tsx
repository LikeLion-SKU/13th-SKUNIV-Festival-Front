import styled from "@emotion/styled";
import searchIcon from "@icon/search.svg";

interface Props {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export default function SearchSection({ searchTerm, onSearchTermChange }: Props) {
  return (
    <Wrapper>
      <SearchBox
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="학과 부스 검색"
      />
      <SearchIcon src={searchIcon} alt="search" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 354px;
  margin-bottom: 16px;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 50px;
  background-color: #f5f5f5;
  padding: 0 40px 0 15px;
  font-size: 15px;
  color: #a3a3a3;
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
