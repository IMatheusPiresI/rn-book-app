import { api } from '..';

export const getBooksBySubject = async (subject: string) => {
  const result = await api.get(`/volumes?q=subject:${subject}&maxResults=40`);

  return result.data;
};

export const getBooksByQuery = async (query: string) => {
  const result = await api.get(`/volumes?q=${query}&maxResults=40`);

  return result.data;
};
