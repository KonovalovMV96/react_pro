import { useRef, useState, type ChangeEvent } from "react";

export const DebouncedLogger = () => {
  const [value, setValue] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setValue(text);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("Введенный текст (через 1 секунду):", value);
    }, 1000);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder="Начните печатать..."
    />
  );
};
