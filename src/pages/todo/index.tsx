import { useState } from 'react';
import { createTodoAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

const DUMMY_TODO_LIST: TodoItemType[] = [
  {
    id: 1,
    todo: 'todo1',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: 'todo1',
    isCompleted: false,
    userId: 1,
  },
];

function Todo(): JSX.Element {
  const [todos, setTodos] = useState(DUMMY_TODO_LIST);

  const handleCompletedClick = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const createTodo = async (newTodo: string): Promise<void> => {
    const data = await createTodoAPI(newTodo);
    console.log('data: ', data);
  };

  return (
    <div>
      <NewTodoForm createTodo={createTodo} />

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
