import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 0;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px 8px;
    width: 29px;
    height: 29px;
    color: #7d7d7d;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &.active {
      background: #007bff;
      color: white;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border: none;
    }
  }
`;
