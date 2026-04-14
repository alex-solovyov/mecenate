import axios from 'axios';
import { rootStore } from '../stores/RootStore';

const baseURL =
  process.env.EXPO_PUBLIC_API_URL ?? 'https://k8s.mectest.ru/test-app';

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
});

apiClient.interceptors.request.use((config) => {
  const token = rootStore.auth.token;
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
