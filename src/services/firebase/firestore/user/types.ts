import { IBook } from '../../../books/types';

type IUserReference = {
  id: string;
  name: string;
  email: string;
  favorites?: IBook[];
};

export type { IUserReference };
