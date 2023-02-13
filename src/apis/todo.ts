import { AxiosError } from 'axios';
import api from '.';
import { type TodoItemType } from '../types/todo';

const TODO_PATH = '/todos';
const access_token = localStorage.getItem('access_token');

export const createTodoAPI = async (todo: string): Promise<TodoItemType> => {
  try {
    if (access_token === null) {
      throw new Error('access_token이 없습니다.');
    }

    const response = await api.post(
      TODO_PATH,
      { todo },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
      }
    }
    throw error;
  }
};

export const getTodosAPI = async (): Promise<TodoItemType[]> => {
  try {
    if (access_token === null) {
      throw new Error('access_token이 없습니다.');
    }

    const response = await api.get(TODO_PATH, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
      }
    }
    throw error;
  }
};
