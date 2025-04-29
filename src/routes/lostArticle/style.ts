import styled from "@emotion/styled";

export const Container = styled.div`
`;

export const CardList = styled.div`
   display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개씩 고정 */
  grid-template-rows: repeat(3, 1fr); 
  gap: 12px;
  min-height: 536px;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 4px;
    padding: 4px 8px;
    border: none;
    width: 29px;
    height: 29px;
    color: #7d7d7d;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &.active {
      background: #4aa4ff;
      color: white;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border: none;
    }
  }
  button.arrow-left {
    margin-right: 12px;
    border: 1px solid #e3e3e3;
  }
  button.arrow-right {
    margin-left: 12px;
    border: 1px solid #e3e3e3;
  }
`;
