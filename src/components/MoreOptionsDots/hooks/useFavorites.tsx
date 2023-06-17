import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { IBook } from '../../../services/books/types';

type IProps = {
  book: IBook;
  handleCloseOptions: () => void;
};
export const useFavorites = ({ book, handleCloseOptions }: IProps) => {
  const STORAGE_KEY = '@book_favorite';

  const [booksStorage, setBooksStorage] = useState<IBook[] | null>(null);

  const getBooksStorage = useCallback(async () => {
    const jsonBooks = await AsyncStorage.getItem(STORAGE_KEY);
    const books: IBook[] | null =
      jsonBooks != null ? JSON.parse(jsonBooks) : null;
    setBooksStorage(books);
  }, []);

  const bookExists = useMemo(() => {
    if (!booksStorage) return false;

    const bookExist = booksStorage.some((b) => b.id === book.id);
    return bookExist;
  }, [book, booksStorage]);

  const addBookToFavorite = async () => {
    if (!booksStorage) {
      const bookStringify = JSON.stringify([book]);
      await AsyncStorage.setItem(STORAGE_KEY, bookStringify);
      return;
    }
    const booksAdd = [...booksStorage, book];
    const booksAddStringify = JSON.stringify(booksAdd);
    await AsyncStorage.setItem(STORAGE_KEY, booksAddStringify);
    setBooksStorage(booksAdd);
    handleCloseOptions();
  };

  const removeBookToFavorite = async () => {
    if (!booksStorage) return;

    const booksWithoutRemoved = booksStorage.filter((b) => b.id !== book.id);
    const newBooksStringigy = JSON.stringify(booksWithoutRemoved);
    await AsyncStorage.setItem(STORAGE_KEY, newBooksStringigy);
    setBooksStorage(booksWithoutRemoved);
    handleCloseOptions();
  };

  const handleToogleAddOrRemoveBookStorage = async () => {
    if (!booksStorage) {
      addBookToFavorite();
      return;
    }

    if (bookExists) {
      removeBookToFavorite();
      return;
    }
    addBookToFavorite();
  };

  useEffect(() => {
    getBooksStorage();
  }, [getBooksStorage]);

  return {
    handleToogleAddOrRemoveBookStorage,
    bookExists,
  };
};
