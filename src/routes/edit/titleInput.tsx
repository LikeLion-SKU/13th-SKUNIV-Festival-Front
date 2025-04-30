import { InputLabel, InputBox } from "./style";

interface Props {
  value: string;
  setValue: (val: string) => void;
}

const TitleInput = ({ value, setValue }: Props) => {
  return (
    <>
      <InputLabel>이름</InputLabel>
      <InputBox  placeholder="분실물 이름을 입력해주세요." value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default TitleInput;
