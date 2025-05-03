import { useState, useRef } from "react";
import { InputLabel, ImageBox, UploadIcon, ImageText, PreviewImageWrapper, PreviewImage, RemoveButton } from "./style";
import Upload from "../../shared/assets/icon/Upload.svg?react";

interface ImageUploaderProps {
  onImageChange: (file: File) => void;
}

const ImageUploader = ({ onImageChange }: ImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 파일 선택 후 이미지 미리보기 설정
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string); // 미리보기 설정
      };

      reader.readAsDataURL(file); // 파일을 DataURL로 읽기

      onImageChange(file); // 부모 컴포넌트로 파일 전달
    }
  };

  // ImageBox 클릭 시 파일 선택 창 열기
  const handleImageBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 input 요소 클릭
    }
  };

  // 미리보기 이미지 삭제
  const handleRemovePreview = () => {
    setImagePreview(null); // 미리보기 이미지 삭제
  };

  return (
    <>
      <InputLabel>이미지 업로드</InputLabel>
      
      {/* 이미지 미리보기가 있으면 미리보기 이미지를 렌더링, 없으면 ImageBox 렌더링 */}
      {imagePreview ? (
        <PreviewImageWrapper>
          <PreviewImage src={imagePreview} alt="미리보기 이미지" />
          <RemoveButton onClick={handleRemovePreview}>X</RemoveButton>
        </PreviewImageWrapper>
      ) : (
        <ImageBox onClick={handleImageBoxClick}>
          <UploadIcon>
            <Upload />
          </UploadIcon>
          <ImageText>분실물 사진을 업로드하세요.</ImageText>
        </ImageBox>
      )}

      {/* 파일 입력 요소는 숨겨두고, 클릭하면 열리도록 처리 */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }} // 화면에는 보이지 않게 처리
        accept="image/*" // 이미지 파일만 선택 가능
        onChange={handleFileChange} // 파일이 선택되면 처리
      />
    </>
  );
};

export default ImageUploader;
