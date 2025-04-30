import { InputLabel, DateSelect } from "./style";

interface Props {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DateSelector = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <>
      <InputLabel>날짜 입력</InputLabel>
      <DateSelect
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="" disabled hidden>
          날짜를 선택하세요
        </option>
        <option value="2025-05-07">5월 7일</option>
        <option value="2025-05-08">5월 8일</option>
        <option value="2025-05-09">5월 9일</option>
      </DateSelect>
    </>
  );
};

export default DateSelector;
