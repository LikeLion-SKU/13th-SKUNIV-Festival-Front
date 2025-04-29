import styled from "@emotion/styled";

export const FilterWrapper = styled.div`
  button {
    width: 64px;
    height: 29px;
    background-color: #339cff;
    color: white;
    font-size: 11px;
    font-weight: 500;
    border-radius: 5px;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
`;

export const AddButton = styled.div`
  button {
    width: 64px;
    height: 29px;
    background-color: #fff;
    color: #a3a3a3;
    font-size: 12px;
    font-weight: 500;
    border-radius: 5px;
    line-height: normal;
    border: 1px solid #e3e3e3;
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
  padding: 20px 0;
`;

export const SaveText = styled.p`
  color: #9f9f9f;
  text-align: center;
  font-size: 7.784px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.195px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor:pointer;
`;
