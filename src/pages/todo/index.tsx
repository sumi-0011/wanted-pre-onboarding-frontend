import { useState } from 'react';
import TodoItem, { type TodoItemType } from './TodoItem';

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

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </div>
  );
}

export default Todo;
