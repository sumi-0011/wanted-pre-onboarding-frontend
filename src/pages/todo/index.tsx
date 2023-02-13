import { useEffect, useState } from 'react';
import { getTodosAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

function Todo(): JSX.Element {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const getTodos = async (): Promise<void> => {
    const data = await getTodosAPI();
    setTodos(data);
  };

  const reloadTodos = async (): Promise<void> => {
    await getTodos();
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
          // handleCompletedClick={handleCompletedClick}
          reloadTodos={reloadTodos}
        />
      ))}
    </div>
  );
}

export default Todo;
