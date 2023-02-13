import { Box, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTodosAPI } from '../../apis/todo';
import { type TodoItemType } from '../../types/todo';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

function Todo(): JSX.Element {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const getTodos = async (): Promise<void> => {
    const data = await getTodosAPI();
    setTodos(data);
  };

  const reloadTodos = async (): Promise<void> => {
    await getTodos();
  };

  useEffect(() => {
    void getTodos();
  }, []);

  return (
    <Box py={5}>
      <NewTodoForm reloadTodos={reloadTodos} />

      <UnorderedList pt={5} listStyleType="none">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} reloadTodos={reloadTodos} />
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Todo;
