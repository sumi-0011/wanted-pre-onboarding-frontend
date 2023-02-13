import { useEffect, useState } from 'react';
import { createTodoAPI, getTodosAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

function Todo(): JSX.Element {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const handleCompletedClick = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const reloadTodos = async (): Promise<void> => {
    await getTodos();
  };
  const getTodos = async (): Promise<void> => {
    const data = await getTodosAPI();
    setTodos(data);
  };

  useEffect(() => {
    void getTodos();
  }, []);

  return (
    <div>
      <NewTodoForm reloadTodos={reloadTodos} />

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleCompletedClick={handleCompletedClick}
        />
      ))}
    </div>
  );
}

export default Todo;
