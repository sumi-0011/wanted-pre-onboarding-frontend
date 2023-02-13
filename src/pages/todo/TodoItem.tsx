export interface TodoItemType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoItemProps extends TodoItemType {
  handleCompletedClick: (id: number) => void;
}
function TodoItem({
  id,
  todo,
  isCompleted,
  userId,
  handleCompletedClick,
}: TodoItemProps): JSX.Element {
  const onCheckClick = (): void => {
    handleCompletedClick(id);
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
