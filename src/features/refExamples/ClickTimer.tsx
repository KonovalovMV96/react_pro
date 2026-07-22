import { useRef } from "react";

interface ClickData {
  startTime: number | null;
  clickCount: number;
}
export const ClickTimer = () => {
  const clickDataRef = useRef<ClickData>({ startTime: null, clickCount: 0 });
  const onClickHandler = () => {
    const now = Date.now();

    if (clickDataRef.current.startTime === null) {
      clickDataRef.current.startTime = now;
    }
    clickDataRef.current.clickCount += 1;

    console.log(
      `Разница между текущим временем и временм первого клика: ${now - clickDataRef.current.startTime} мс`,
    );
    console.log(`Общее количество кликов: ${clickDataRef.current.clickCount}`);
  };
  return (
    <button onClick={onClickHandler}>Открой консоль и нажми на меня</button>
  );
};
