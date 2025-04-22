import { InputLabel, ImageBox, UploadIcon, ImageText } from "./style";
import Upload from "../../shared/assets/icon/Upload.svg?react";

const ImageUploader = () => {
  return (
    <>
      <InputLabel>이미지 업로드</InputLabel>
      <ImageBox>
        <UploadIcon>
          <Upload />
        </UploadIcon>
        <ImageText>분실물 사진을 업로드하세요.</ImageText>
      </ImageBox>
    </>
  );
};

export default ImageUploader;
