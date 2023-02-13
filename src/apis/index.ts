import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

api.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem('access_token');

    if (access_token === null) {
      throw new Error('access_token이 없습니다.');
    }

    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  async function (error) {
    console.log(error);
    return await Promise.reject(error);
  },
);

export const authAPI = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const handleError = (error: unknown): void => {
  if (error instanceof AxiosError) {
    const { response } = error;

    if (response != null) {
      alert(response.data.message);
    }
  }
};
