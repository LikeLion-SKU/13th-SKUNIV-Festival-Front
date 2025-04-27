import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div``;

// 공통 라벨 스타일
export const InputLabel = styled.p`
  margin: 20px 0 8px;
  font-size: 14px;
  color: #7d7d7d;
  font-weight: 500;

  &:first-of-type {
    margin: 0 0 10px;
  }
`;

// 공통 입력창 스타일
export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  background: #f5f5f5;
  border: none;
  outline: none;
`;

// 이미지 업로드 영역
export const ImageBox = styled.div`
  width: 100%;
  height: 290px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  background: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadIcon = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`;

export const ImageText = styled.p`
  color: #999;
  font-size: 14px;
`;

// 날짜 선택
export const DateSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #4aa4ff;
  border-radius: 5px;
  padding: 0 12px;
  font-size: 14px;
  color: #4aa4ff;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: url("/src/shared/assets/icon/arrow-down.svg") no-repeat right 12px center;
  background-size: 16px;
`;

// 등록 버튼
export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 8px;
  background-color: #4aa4ff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d7d7d7;
  margin-top: 30px;
`;

// 미리보기 이미지와 X 버튼을 감싸는 Wrapper
export const PreviewImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

// 미리보기 이미지 스타일
export const PreviewImage = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
  border-radius: 8px;
`;

// X 버튼 스타일
export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;