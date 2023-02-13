import { type ChangeEvent, useState } from 'react';

interface NewTodoFormProps {
  createTodo: (newTodo: string) => Promise<void>;
}

function NewTodoForm({ createTodo }: NewTodoFormProps): JSX.Element {
  const [input, setInput] = useState('');

  const onNewTodoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const onNewTodoAddBtnClick = async (): Promise<void> => {
    if (input !== '') {
      await createTodo(input);
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
