import { TaskList, useTasks } from "features/taskList";
import { FilterButton } from "shared/ui";

export const TasksWidget = () => {
  const { tasks, setFilter, isLoading, removeTask } = useTasks();

  return (
    <div>
      <FilterButton onFilterChange={setFilter} />
      {isLoading && <p>Загрузка задач...</p>}
      {tasks.length > 0 && (
        <TaskList tasks={tasks} removeTask={removeTask} />
      )}
    </div>
  );
};
