import axios, { AxiosError } from 'axios';

export const authAPI = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

authAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
      }
    }
    return await Promise.reject(error);
  },
);

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
    return await Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
        switch (response.status) {
          case 401:
            alert(response.statusText);
            // TODO : signin page spa redirect
            window.location.href = '/signin';
            break;
          default:
            return await Promise.reject(error);
        }
      }
    }
    return await Promise.reject(error);
  },
);
