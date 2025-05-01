import { InputLabel, InputBox } from "./style";

interface Props {
  value: string;
  setValue: (val: string) => void;
}

const LocationInput = ({ value, setValue }: Props) => {
  return (
    <>
      <InputLabel>습득 장소 입력</InputLabel>
      <InputBox
        placeholder="예) 혜인관 앞"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default LocationInput;
