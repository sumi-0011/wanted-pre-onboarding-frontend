import { api } from '.';
import { type TodoItemType } from '../types/todo';

const TODO_PATH = '/todos';

export const createTodoAPI = async (todo: string): Promise<TodoItemType> => {
  const response = await api.post(TODO_PATH, { todo });

  return response.data;
};

export const getTodosAPI = async (): Promise<TodoItemType[]> => {
  const response = await api.get(TODO_PATH);
  return response.data;
};

export const updateTodoAPI = async (
  id: number,
  todo: string,
  isCompleted: boolean,
): Promise<TodoItemType> => {
  const response = await api.put(`${TODO_PATH}/${id}`, { todo, isCompleted });

  return response.data;
};

export const deleteTodo = async (id: number): Promise<boolean> => {
  const res = await api.delete(`${TODO_PATH}/${id}`);
  return res.status === 204;
};
