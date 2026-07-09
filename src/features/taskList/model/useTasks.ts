import { useCallback, useEffect, useMemo, useState } from "react";
import type { Task } from "entities/task";
import type { Filter } from "shared/ui";
import { useGetTasksQuery } from "entities/task/api";

export const useTasks = () => {
  const { data: tasksData = [], isLoading } = useGetTasksQuery();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    if (tasks.length === 0 && tasksData.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(tasksData);
    }
  }, [tasksData, tasks]);
  const filteredTasks = useMemo(() => {
    if (filter === "all") return tasks;
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks.filter((task) => !task.completed);
  }, [tasks, filter]);

  const removeTask = useCallback((id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    isLoading,
    setFilter,
    removeTask,
  };
};
