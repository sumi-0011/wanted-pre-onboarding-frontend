import { api, handleError } from '.';
import { type TodoItemType } from '../types/todo';

const TODO_PATH = '/todos';

export const createTodoAPI = async (todo: string): Promise<TodoItemType> => {
  try {
    const response = await api.post(TODO_PATH, { todo });

    return response.data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getTodosAPI = async (): Promise<TodoItemType[]> => {
  try {
    const response = await api.get(TODO_PATH);
    return response.data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const updateTodoAPI = async (
  id: number,
  todo: string,
  isCompleted: boolean,
): Promise<TodoItemType> => {
  try {
    const response = await api.put(`${TODO_PATH}/${id}`, { todo, isCompleted });

    return response.data;
  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const deleteTodo = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`${TODO_PATH}/${id}`);
    return true;
  } catch (error: unknown) {
    handleError(error);
    return false;
  }
};
