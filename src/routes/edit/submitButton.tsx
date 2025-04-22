import { useLocation } from "react-router-dom";
import { Divider, Button } from "./style";

const SubmitButton = () => {
  const location = useLocation();
  const isEditMode = new URLSearchParams(location.search).has("id");

  return (
    <>
      <Divider />
      <Button>{isEditMode ? "수정" : "등록하기"}</Button>
    </>
  );
};

export default SubmitButton;
