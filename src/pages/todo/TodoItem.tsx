export interface TodoItemType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoItemProps extends TodoItemType {
}
function TodoItem({
  id,
  todo,
  isCompleted,
  userId,
}: TodoItemProps): JSX.Element {

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onClick={onCheckClick} />
        <span>{todo}</span>
      </label>
    </li>
  );
}
export default TodoItem;
