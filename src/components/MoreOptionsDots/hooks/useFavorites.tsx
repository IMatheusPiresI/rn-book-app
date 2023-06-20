import { useMemo } from 'react';

import { IBook } from '../../../services/books/types';
import {
  addBookToFavorites,
  removeBookToFavorites,
} from '../../../services/firebase/firestore/user';
import { useUserStore } from '../../../store/user';
import { toastError } from '../../Toast/config';

type IProps = {
  book: IBook;
  handleCloseOptions: () => void;
};
export const useFavorites = ({ book, handleCloseOptions }: IProps) => {
  const { user, addToFavorites, removeToFavorites } = useUserStore();

  const bookExists = useMemo(() => {
    if (!user.favorites || user.favorites?.length === 0) return false;

    const bookExist = user.favorites.some((b) => b.id === book.id);
    return bookExist;
  }, [book, user.favorites]);

  const handleAddBookToFavorite = async () => {
    if (!user) return;

    handleCloseOptions();
    try {
      await addBookToFavorites(user.id, book);
      addToFavorites(book);
      handleCloseOptions();
    } catch (err) {
      toastError('Failed to add book to favorites');
    }
  };

  const handleRemoveBookToFavorite = async () => {
    if (user.favorites?.length === 0) return;

    handleCloseOptions();
    try {
      await removeBookToFavorites(user.id, book);
      removeToFavorites(book);
    } catch (err) {
      toastError('Failed to remove book to favorites');
    }
  };

  const handleToogleAddOrRemoveBookStorage = async () => {
    if (user.favorites?.length === 0) {
      handleAddBookToFavorite();
      return;
    }

    if (bookExists) {
      handleRemoveBookToFavorite();
      return;
    }
    handleAddBookToFavorite();
  };

  return {
    handleToogleAddOrRemoveBookStorage,
    bookExists,
  };
};
