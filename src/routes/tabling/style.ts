import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Search = styled.div`
  padding-block: 10px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 100px;
  background: #f5f5f5;
`;

export const SearchInput = styled.input`
  all: unset;
  width: 100%;
  &::placeholder {
    color: #a3a3a3;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.35px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
