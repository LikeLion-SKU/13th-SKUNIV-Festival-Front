import styled from "styled-components";
import searchIcon from "@icon/search.svg";

const Section = styled.div`
  margin-bottom: 28px;
  border-bottom: 1.5px solid #ebeaea;
`;

const SearchInputWrapper = styled.div`
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

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const NavBtn = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 32px;
  border: 1.3px solid #4aa4ff;
  background-color: ${(props) => (props.selected ? "#4AA4FF" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#4AA4FF")};
  font-weight: 500;
  font-size: 11px;
  border-radius: 50px;
  cursor: pointer;
`;

interface Props {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchTermChange,
  selectedLocation,
  onLocationChange,
}: Props) {
  const locations = ["유담관", "은주1관", "은주2관", "청운관", "혜인관"];

  return (
    <Section>
      <SearchInputWrapper>
        <SearchBox
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          placeholder="학과명을 입력하세요"
        />
        <SearchIcon src={searchIcon} alt="search" />
      </SearchInputWrapper>

      {searchTerm === "" && (
        <NavWrapper>
          {locations.map((loc) => (
            <NavBtn
              key={loc}
              selected={selectedLocation === loc}
              onClick={() => onLocationChange(loc)}
            >
              {loc}
            </NavBtn>
          ))}
        </NavWrapper>
      )}
    </Section>
  );
}
