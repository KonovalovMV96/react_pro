import { useRef, type FocusEvent } from "react";

interface FocusData {
  transitFocusCount: number;
}

export const FocusTracker = () => {
  const inputOneRef = useRef<HTMLInputElement | null>(null);
  const inputTwoRef = useRef<HTMLInputElement | null>(null);
  const focusDataRef = useRef<FocusData>({ transitFocusCount: 0 });

  const handlerFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      focusDataRef.current.transitFocusCount += 1;
      console.log(
        `Количество переходов фокуса между полями: ${focusDataRef.current.transitFocusCount}`,
      );
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <input
        type="text"
        placeholder="Первый инпут"
        ref={inputOneRef}
        onFocus={handlerFocus}
      />
      <input
        type="text"
        placeholder="Второй инпут"
        ref={inputTwoRef}
        onFocus={handlerFocus}
      />
      <button onClick={() => inputOneRef.current?.focus()}>
        Сфокусировать на первом
      </button>
    </div>
  );
};
