import { useState } from 'react';
import { updateTodoAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import TodoItemModifyMode from './TodoItemModifyMode';

interface TodoItemProps extends TodoItemType {
  reloadTodos: () => Promise<void>;
}
function TodoItem({
  id,
  todo,
  isCompleted,
  userId,
  reloadTodos,
}: TodoItemProps): JSX.Element {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const updateTodo = async (
    newTodo: string,
    newIsCompleted: boolean,
  ): Promise<void> => {
    await updateTodoAPI(id, newTodo, newIsCompleted);
    await reloadTodos();
  };

  const onCheckClick = (): void => {
    void updateTodo(todo, !isCompleted);
  };

  const onModifyButtonClick = (): void => {
    setIsModifyMode(!isModifyMode);
  };

  const onDeleteButtonClick = (): void => {
    console.log('onDeleteButtonClick: ');
  };

  if (isModifyMode) {
    return <TodoItemModifyMode cancelModify={onModifyButtonClick} />;
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onCheckClick} />
        <span>{todo}</span>
      </label>{' '}
      <button data-testid="modify-button" onClick={onModifyButtonClick}>
        수정
      </button>
      <button data-testid="delete-button" onClick={onDeleteButtonClick}>
        삭제
      </button>
    </li>
  );
}
export default TodoItem;
