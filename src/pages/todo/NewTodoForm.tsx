import { type ChangeEvent, useState } from 'react';
import { createTodoAPI } from '../../apis/todo';

interface NewTodoFormProps {
  reloadTodos: () => Promise<void>;
}

function NewTodoForm({ reloadTodos }: NewTodoFormProps): JSX.Element {
  const [input, setInput] = useState('');

  const onNewTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const onNewTodoAddBtnClick = async (): Promise<void> => {
    if (input !== '') {
      await createTodoAPI(input);
      await reloadTodos();

      setInput('');
    }
  };
  return (
    <div>
      <input
        data-testid="new-todo-input"
        value={input}
        onChange={onNewTodoInputChange}
      />
      <button data-testid="new-todo-add-button" onClick={onNewTodoAddBtnClick}>
        추가
      </button>
    </div>
  );
}
export default NewTodoForm;
