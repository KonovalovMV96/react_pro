import type { Task } from "entities/task";
import { TaskList, useTasks } from "features/taskList";
import { FilterButton } from "shared/ui";

const initialTasks: Task[] = [
  { id: "1", title: "Постирать вещи", completed: true },
  { id: "2", title: "Сдать домашку на обучении", completed: false },
  { id: "3", title: "Погулять с собакой", completed: false },
  { id: "4", title: "Отдохнуть", completed: true },
];

export const TasksWidget = () => {
  const { tasks, setFilter, removeTask } = useTasks(initialTasks);

  return (
    <div>
      <FilterButton onFilterChange={setFilter} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};
