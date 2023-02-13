import { updateTodoAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';

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

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onCheckClick} />
        <span>{todo}</span>
      </label>
    </li>
  );
}
export default TodoItem;
