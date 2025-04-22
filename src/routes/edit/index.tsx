import TitleInput from "./titleInput";
import ImageUploader from "./ImageUploder";
import DateSelector from "./DateSelector";
import LocationInput from "./locationInput";
import SubmitButton from "./submitButton";
import { Container } from "./style";

const EditPage = () => {
  return (
    <Container>
      <TitleInput />
      <ImageUploader />
      <DateSelector />
      <LocationInput />
      <SubmitButton />
    </Container>
  );
};

export default EditPage;
