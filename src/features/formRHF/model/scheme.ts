import { z } from "zod";

export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(1, "Имя обязательно")
      .regex(/^[\p{L}\s-]+$/u, {
        message: "Имя должно содержать только буквы",
      }),
    email: z.email({ message: "Некорректный формат email" }),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string().min(6, "Подтверждение пароля обязательно"),
    socialLinks: z.array(z.object({ url: z.url("Некорректный URL") })),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Подтверждение пароля должно совпадать с паролем",
    path: ["confirmPassword"],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const FORM_DEFAULT_VALUES: RegistrationFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  socialLinks: [{ url: "" }],
};
