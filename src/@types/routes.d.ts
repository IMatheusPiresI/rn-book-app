import { IBook } from '../services/books/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      BookDetails: { book: IBook; favoritePage?: boolean };
      Shuffle: undefined;
      BookSearch: undefined;
      Register: undefined;
      SignIn: undefined;
      Favorites: { book: IBook } | undefined;
    }
  }
}
