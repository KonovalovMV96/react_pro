import { useActionState } from "react";

type FormValues = {
  name: string;
  email: string;
};

type FormState = {
  values: FormValues;
  dirty: boolean;
  submitting: boolean;
  success: boolean;
};

const initialState: FormState = {
  values: {
    name: "",
    email: "",
  },
  dirty: false,
  submitting: false,
  success: false,
};

export const ActionStateWithReducer = () => {
  const [state, submit, isPending] = useActionState(
    async (_prevState: FormState, formData: FormData): Promise<FormState> => {
      const values: FormValues = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
      };
      if (!values.name || !values.email) {
        return initialState;
      }

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      return {
        values: {
          name: "",
          email: "",
        },
        dirty: false,
        submitting: false,
        success: true,
      };
    },
    initialState,
  );

  const isSubmitting = isPending || state.submitting;

  return (
    <form action={submit}>
      <h2>Форма регистрации</h2>

      <input
        name="name"
        placeholder="Введите имя"
        disabled={isSubmitting}
        required
      />

      <input
        name="email"
        placeholder="Введите email"
        disabled={isSubmitting}
        required
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Сохраняем…" : "Сохранить"}
      </button>
      {isSubmitting && <p>Сохраняем данные...</p>}

      {!isSubmitting && state.success && <p>Данные успешно сохранены!</p>}
    </form>
  );
};
