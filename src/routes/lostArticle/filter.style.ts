import styled from "styled-components";

export const FilterWrapper = styled.div`
  button {
    background-color: #339cff;
    color: white;
    font-size: 11px;
    font-weight: 500;
    padding: 8px 18px;
    border-radius: 5px;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
`;

export const SubText = styled.div`
  color: #7d7d7d;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: -0.25px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
