import { TaskCard, type Task } from "entities/task";
import type { FC } from "react";
import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: Task[];
  removeTask: (id: string) => void;
};
export const TaskList: FC<TaskListProps> = ({ tasks, removeTask }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} removeTask={removeTask} />
      ))}
      {tasks.length === 0 && <p>Нет задач</p>}
    </div>
  );
};
