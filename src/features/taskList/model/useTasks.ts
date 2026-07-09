import { useCallback, useMemo, useState } from "react";
import type { Task } from "entities/task";
import type { Filter } from "shared/ui";

export const useTasks = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "all") return tasks;
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks.filter((task) => !task.completed);
  }, [tasks, filter]);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    setFilter,
    removeTask,
  };
};
