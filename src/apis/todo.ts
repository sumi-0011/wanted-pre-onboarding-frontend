import { AxiosError } from 'axios';
import api from '.';
import { type TodoItemType } from '../types/todo';

const CREATE_TODO_PATH = '/todos';

export const createTodoAPI = async (todo: string): Promise<TodoItemType> => {
  try {
    const access_token = localStorage.getItem('access_token');
    console.log('access_token: ', access_token, todo);
    if (access_token === null) {
      throw new Error('access_token이 없습니다.');
    }

    const response = await api.post(
      CREATE_TODO_PATH,
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
