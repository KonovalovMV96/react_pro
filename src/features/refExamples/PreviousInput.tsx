/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from "react";

export const PreviousInput = () => {
  const [value, setValue] = useState("");
  const prevValueRef = useRef<string | null>(null);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Предыдущее значение: {prevValueRef.current}</p>
    </div>
  );
};
