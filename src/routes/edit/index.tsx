import { useState } from "react";
import TitleInput from "./titleInput";
import ImageUploader from "./imageUploder";
import DateSelector from "./dateSelector";
import LocationInput from "./locationInput";
import SubmitButton from "./submitButton";
import { Container } from "./style";
import { postLostItem } from "./editAPI";

const EditPage = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [foundPlace, setFoundPlace] = useState("");
  const [foundDate, setFoundDate] = useState("");

  const handleSubmit = async () => {
    const payload = { name, imageUrl, foundPlace, foundDate };
    try {
      await postLostItem(payload);
      alert("등록 성공!");
    } catch (e) {
      alert("등록 실패!");
    }
  };

  return (
    <Container>
      <TitleInput value={name} setValue={setName} />
      <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <DateSelector selectedDate={foundDate} setSelectedDate={setFoundDate} />
      <LocationInput value={foundPlace} setValue={setFoundPlace} />
      <SubmitButton onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditPage;
