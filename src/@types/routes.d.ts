import { IBook } from '../services/books/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      BookDetails: { book: IBook };
      BookSearch: undefined;
      Register: undefined;
      SignIn: undefined;
    }
  }
}
