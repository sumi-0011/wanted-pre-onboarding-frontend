import { useState } from 'react';
import { deleteTodo, updateTodoAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import TodoItemModifyMode from './TodoItemModifyMode';

interface TodoItemProps extends TodoItemType {
  reloadTodos: () => Promise<void>;
}

function TodoItem({
  id,
  todo,
  isCompleted,
  reloadTodos,
}: TodoItemProps): JSX.Element {
  const [isModifyMode, setIsModifyMode] = useState(false);

  const handleUpdateTodo = async (newTodo: string): Promise<void> => {
    await updateTodoAPI(id, newTodo, isCompleted);
    await reloadTodos();
  };

  const onCheckClick = async (): Promise<void> => {
    await updateTodoAPI(id, todo, !isCompleted);
    await reloadTodos();
  };

  const onModifyButtonClick = (): void => {
    setIsModifyMode(!isModifyMode);
  };

  const onDeleteButtonClick = async (): Promise<void> => {
    if (window.confirm('해당 TODO를 삭제하시겠습니까?')) {
      const flag = await deleteTodo(id);
      if (flag) {
        alert('TODO가 삭제되었습니다. ');
        await reloadTodos();
      }
    }
  };

  if (isModifyMode) {
    return (
      <TodoItemModifyMode
        initTodo={todo}
        cancelModify={onModifyButtonClick}
        updateTodo={handleUpdateTodo}
      />
    );
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onCheckClick} />
        <span>{todo}</span>
      </label>
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
