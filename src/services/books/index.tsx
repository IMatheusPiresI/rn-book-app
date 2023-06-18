import { api } from '../api';

export const getBooksBySubject = async (subject: string, maxResults = 40) => {
  const result = await api.get(
    `/volumes?q=subject:${subject}&maxResults=${maxResults}`,
  );

  return result.data;
};

export const getBooksByQuery = async (query: string) => {
  const result = await api.get(`/volumes?q=${query}&maxResults=40`);

  return result.data;
};
