import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(1, "reservation_enter_username"),
  phoneNum: z
    .string()
    .trim()
    .min(1, "reservation_enter_phone_number")
    .refine((value) => /^\d{3}-\d{3,4}-\d{4}$/.test(value), "reservation_enter_valid_phone_number"),
  headCount: z
    .number({ coerce: true, message: "reservation_headCount_only_number" })
    .refine(
      (value) => /^[1-9]\d*$/.test(String(value)) && Number(value) > 1,
      "reservation_headCount_minimum"
    ),
});

export default reservationSchema;
