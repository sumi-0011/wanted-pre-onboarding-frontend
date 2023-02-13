import { type AxiosResponse, type AxiosHeaders } from 'axios';
import api from '.';

class CustomError extends Error {
  response?: {
    config: unknown;
    data: {
      error: string;
      statusCode: number;
      message: string;
    };
    headers: AxiosHeaders;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
  };
}

interface AuthReturnType {
  data: {
    access_token: string;
  };
  status: number;
}
const SIGN_UP_PATH = '/auth/signup';
const SIGN_IN_PATH = '/auth/signin';

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
    const { response } = error as CustomError;
    if (response != null) {
      alert(response.data.message);
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
    const { response } = error as CustomError;
    if (response != null) {
      alert(response.data.message);
    }

    throw error;
  }
};
