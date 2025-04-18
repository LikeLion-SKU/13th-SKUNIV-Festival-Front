import { FilterContainer, SubText, FilterWrapper } from "./filter.style";

const Filter = () => {
  return (
    <FilterContainer>
      <SubText>
        <p>모든 분실물은 총학생회 부스에서 관리합니다.</p>
        <p>좌측 상단에 기입된 위치는 습득위치입니다.</p>
      </SubText>
      <FilterWrapper>
        <button>최신순</button>
      </FilterWrapper>
    </FilterContainer>
  );
};

export default Filter;
