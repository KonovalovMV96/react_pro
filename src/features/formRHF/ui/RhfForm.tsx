import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FORM_DEFAULT_VALUES,
  registrationSchema,
  type RegistrationFormValues,
} from "../model";
import styles from "./RhfForm.module.css";

export const RhfForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: FORM_DEFAULT_VALUES,
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    name: "socialLinks",
    control,
  });

  const onSubmit = (values: RegistrationFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={styles.formWrapper}>
      <h1> Регистрация </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="username">Имя пользователя:</label>
        <input id="username" {...register("username")} />
        {errors.username && (
          <div className={styles.errorText}>{errors.username.message}</div>
        )}

        <label htmlFor="email">E-mail:</label>
        <input id="email" {...register("email")} />
        {errors.email && (
          <div className={styles.errorText}>{errors.email.message}</div>
        )}

        <label htmlFor="password">Пароль:</label>
        <input id="password" {...register("password")} />
        {errors.password && (
          <div className={styles.errorText}>{errors.password.message}</div>
        )}

        <label htmlFor="confirmPassword">Подтверждение пароля:</label>
        <input id="confirmPassword" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <div className={styles.errorText}>
            {errors.confirmPassword.message}
          </div>
        )}

        <div>
          <h2>Социальные ссылки:</h2>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div>
                <input
                  {...register(`socialLinks.${index}.url`)}
                  placeholder="https://github.com"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  Удалить
                </button>
              </div>
              {errors.socialLinks?.[index]?.url && (
                <div className={styles.errorText}>
                  {errors.socialLinks[index]?.url?.message}
                </div>
              )}
            </div>
          ))}

          <button type="button" onClick={() => append({ url: "" })}>
            Добавить ссылку
          </button>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
