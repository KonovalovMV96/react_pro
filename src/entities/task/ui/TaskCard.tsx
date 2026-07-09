import React, { type FC } from "react";
import type { Task } from "../model";
import styles from "./TaskCard.module.css";

type TaskCardProps = {
  task: Task;
  removeTask: (id: string) => void;
};
export const TaskCard: FC<TaskCardProps> = React.memo(
  ({ task, removeTask }) => {
    const handleTaskRemove = () => {
      removeTask(task.id);
    };

    return (
      <div className={styles.task}>
        <p>{task.title}</p>
        <p>{task.completed ? "Сделано" : "Ещё не приступал"}</p>
        <button onClick={handleTaskRemove}> Удалить </button>
      </div>
    );
  },
);

TaskCard.displayName = "TaskCard";
