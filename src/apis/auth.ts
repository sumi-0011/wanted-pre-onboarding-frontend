import { type AxiosHeaders } from 'axios';
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

const SIGN_UP_PATH = '/auth/signup';

export const signUpAPI = async (
  email: string,
  password: string,
): Promise<unknown> => {
  try {
    const { data, status } = await api.post(
      SIGN_UP_PATH,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } },
    );

    if (status === 201 || status === 200) {
      return data;
    }
    return status;
  } catch (error: unknown) {
    const { response } = error as CustomError;
    if (response != null) {
      alert(response.data.message);
    }

    throw error;
  }
};

export default signUpAPI;
