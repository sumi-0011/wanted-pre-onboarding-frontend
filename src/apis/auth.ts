import { authAPI } from '.';

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
  const response = await authAPI.post(
    SIGN_UP_PATH,
    { email, password },
    { headers: { 'Content-Type': 'application/json' } },
  );

  return { data: response.data, status: response.status };
};

export const signInAPI = async (
  email: string,
  password: string,
): Promise<AuthReturnType> => {
  const response = await authAPI.post(
    SIGN_IN_PATH,
    { email, password },
    { headers: { 'Content-Type': 'application/json' } },
  );

  return { data: response.data, status: response.status };
};
