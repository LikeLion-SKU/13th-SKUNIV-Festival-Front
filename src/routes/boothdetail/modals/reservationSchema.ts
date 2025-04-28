import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(1, "예약자 명을 입력해주세요."),
  phoneNum: z
    .string()
    .min(1, "전화번호를 입력해주세요.")
    .refine(
      (value) => /^\d{3}-\d{3,4}-\d{4}$/.test(value),
      "전화번호를 올바르게 입력해주세요. (예: 010-1234-5678)"
    ),
  headCount: z
    .number({ coerce: true, message: "인원 수는 숫자로만 입력해주세요." })
    .refine(
      (value) => /^[1-9]\d*$/.test(String(value)) && Number(value) > 1,
      "인원 수는 최소 2명 이상 입력해주세요."
    ),
});

export default reservationSchema;
