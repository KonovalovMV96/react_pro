import { useActionState } from "react";

type Status = "idle" | "success";
const initialState: Status = "idle";

export const FormWithAsyncSave = () => {
  const [status, submit, isPending] = useActionState(
    async (_prev: Status, formData: FormData): Promise<Status> => {
      const value = String(formData.get("info") ?? "").trim();

      if (!value) {
        return initialState;
      }
      await new Promise((resolve) => {
        setTimeout(resolve, 1e3);
      });
      //Возвращаю success что бы увидеть Saved!
      return "success";
    },
    initialState,
  );

  const state = isPending ? "saving" : status;

  return (
    <form action={submit}>
      <input
        placeholder="Введите информацию которую хотите сохранить"
        name="info"
        disabled={isPending}
        style={{ minWidth: "350px" }}
      />
      <button type="submit" disabled={isPending}>
        {state === "saving" ? "Saving..." : "Save"}
      </button>
      {state === "idle" && <p>Начальное состояние, ожидаю отправки</p>}
      {state === "saving" && <p>Saving...</p>}
      {state === "success" && <p>Saved!</p>}
    </form>
  );
};
