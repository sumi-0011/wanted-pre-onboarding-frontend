import { type ChangeEvent, useState } from 'react';

interface TodoItemModifyModeProps {
  initTodo: string;
  cancelModify: () => void;
  updateTodo: (newTodo: string) => Promise<void>;
}

function TodoItemModifyMode({
  initTodo,
  cancelModify,
  updateTodo,
}: TodoItemModifyModeProps): JSX.Element {
  const [modifyTodo, setModifyTodo] = useState(initTodo);

  const onCancel = (): void => {
    setModifyTodo(initTodo);
    cancelModify();
  };

  const onSubmit = async (): Promise<void> => {
    if (modifyTodo === '') {
      return;
    }

    await updateTodo(modifyTodo);
    onCancel();
  };

  const onModifyTodoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setModifyTodo(e.target.value);
  };

  return (
    <li>
      <input
        data-testid="modify-input"
        type="text"
        value={modifyTodo}
        onChange={onModifyTodoChange}
      />
      <button data-testid="submit-button" onClick={onSubmit}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={onCancel}>
        취소
      </button>
    </li>
  );
}

export default TodoItemModifyMode;
