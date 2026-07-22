import { useActionState } from "react";
import { initialFormState, submitFormAction } from "../model";

export const WizardForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitFormAction,
    initialFormState,
  );

  return (
    <div>
      <h2>Подписка на рассылку</h2>

      <form action={formAction}>
        <input type="hidden" name="step" value={state.step} />

        {state.step === 1 && (
          <div>
            <label htmlFor="email">Электронная почта</label>
            <input
              id="email"
              name="email"
              disabled={isPending}
              placeholder="example@mail.com"
            />{" "}
            {state.errors.email && (
              <span style={{ color: "red" }}>{state.errors.email}</span>
            )}
          </div>
        )}

        {state.step === 2 && (
          <>
            <input type="hidden" name="email" value={state.email} />
            <p>
              Вы подписываетесь на: <strong>{state.email}</strong>
            </p>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="confirm"
                  value="yes"
                  disabled={isPending}
                />{" "}
                Я подтверждаю подписку{" "}
              </label>
              {state.errors.confirm && (
                <span style={{ color: "red" }}>{state.errors.confirm}</span>
              )}
            </div>
          </>
        )}

        <button type="submit" disabled={isPending}>
          {isPending ? (
            <span>Отправка данных...</span>
          ) : state.step === 1 ? (
            "Далее"
          ) : (
            "Подтвердить подписку"
          )}
        </button>

        {state.message && <div>{state.message}</div>}
      </form>
    </div>
  );
};
