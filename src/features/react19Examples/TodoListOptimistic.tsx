import { startTransition, useOptimistic, useState } from "react";

type Todo = {
  id: number;
  text: string;
  sending?: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Изучить React 19",
  },
  {
    id: 2,
    text: "Сделать итоговый проект",
  },
];

export const TodoListOptimistic = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic<Todo[], Todo>(
    todos,
    (prev, newTodo) => {
      const optimisticTodo = {
        ...newTodo,
        sending: true,
      };
      return [...prev, optimisticTodo];
    },
  );

  const addTodo = async (formData: FormData) => {
    const text = String(formData.get("todo") ?? "").trim();

    if (!text) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text,
    };

    addOptimisticTodo(newTodo);

    await new Promise((resolve) => {
      setTimeout(resolve, 1e3);
    });

    startTransition(() => {
      setTodos((currentTodos) => [...currentTodos, newTodo]);
    });
  };

  return (
    <section>
      <h2>Список задач</h2>

      <form action={addTodo}>
        <input name="todo" placeholder="Введите новую задачу" />

        <button type="submit">Добавить</button>
      </form>

      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={{ opacity: todo.sending ? 0.5 : 1 }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
