import { AxiosError } from 'axios';
import api from '.';

const SIGN_UP_PATH = '/auth/signup';
const SIGN_IN_PATH = '/auth/signin';

interface AuthReturnType {
  data: {
    access_token: string;
  };
  status: number;
}

export const signUpAPI = async (
  email: string,
  password: string,
): Promise<AuthReturnType> => {
  try {
    const response = await api.post(
      SIGN_UP_PATH,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } },
    );

    return { data: response.data, status: response.status };
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

export const signInAPI = async (
  email: string,
  password: string,
): Promise<AuthReturnType> => {
  try {
    const response = await api.post(
      SIGN_IN_PATH,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } },
    );

    return { data: response.data, status: response.status };
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
