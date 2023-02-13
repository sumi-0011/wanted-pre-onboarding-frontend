import { useState } from 'react';

interface TodoItemModifyModeProps {
  cancelModify: () => void;
}
function TodoItemModifyMode({
  cancelModify,
}: TodoItemModifyModeProps): JSX.Element {
  const [modifyTodo, setModifyTodo] = useState('');

  return (
    <li>
      <input
        data-testid="modify-input"
        type="text"
        value={modifyTodo}
        onChange={(e) => {
          setModifyTodo(e.target.value);
        }}
      />
      <button data-testid="submit-button">제출</button>
      <button data-testid="cancel-button" onClick={cancelModify}>
        취소
      </button>
    </li>
  );
}
export default TodoItemModifyMode;
