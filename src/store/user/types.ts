import { IBook } from '../../services/books/types';
import { IUserReference } from '../../services/firebase/firestore/user/types';

type IUserStore = {
  user: IUserReference;
  setUser: (user: IUserReference) => void;
  addToFavorites: (book: IBook) => void;
  removeToFavorites: (book: IBook) => void;
  logout: () => void;
};

export type { IUserStore };
