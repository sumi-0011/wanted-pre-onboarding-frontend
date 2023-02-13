import { Button, Checkbox, Flex, ListItem, Text } from '@chakra-ui/react';
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

  return (
    <ListItem py={1}>
      <Flex gap={2}>
        {isModifyMode ? (
          <TodoItemModifyMode
            initTodo={todo}
            cancelModify={onModifyButtonClick}
            updateTodo={handleUpdateTodo}
          />
        ) : (
          <>
            <label>
              <Flex minW="510px" gap={2} lineHeight="40px">
                <Checkbox
                  defaultChecked={isCompleted}
                  onChange={onCheckClick}
                />
                <Text>{todo}</Text>
              </Flex>
            </label>
            <Button data-testid="modify-button" onClick={onModifyButtonClick}>
              수정
            </Button>
            <Button data-testid="delete-button" onClick={onDeleteButtonClick}>
              삭제
            </Button>
          </>
        )}
      </Flex>
    </ListItem>
  );
}
export default TodoItem;
