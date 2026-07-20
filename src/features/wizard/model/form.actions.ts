export type FormState = {
  step: 1 | 2;
  email: string;
  errors: {
    email?: string;
    confirm?: string;
  };
  message: string | null;
};

export const initialFormState: FormState = {
  step: 1,
  email: "",
  errors: {},
  message: null,
};

export async function submitFormAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const step = formData.get("step");
  const email = String(formData.get("email") ?? "");
  const confirm = formData.get("confirm");

  const nextState: FormState = {
    ...prevState,
    email,
    errors: {},
    message: null,
  };

  if (step === "1") {
    if (!email) {
      return {
        ...nextState,
        step: 1,
        errors: { email: "Email обязателен" },
      };
    }

    return {
      ...nextState,
      step: 2,
    };
  }

  if (step === "2") {
    if (confirm !== "yes") {
      return {
        ...nextState,
        step: 2,
        errors: { confirm: "Нужно подтверждение" },
      };
    }

    // Симуляция задержки отправки
    await new Promise((res) => setTimeout(res, 1000));

    return {
      ...nextState,
      step: 2,
      message: `Подписка на ${email} успешно оформлена!`,
    };
  }

  return prevState;
}
