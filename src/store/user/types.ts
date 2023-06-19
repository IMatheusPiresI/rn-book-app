import { IUserReference } from '../../services/firebase/firestore/user/types';

type IUserStore = {
  user: IUserReference | null;
  setUser: (user: IUserReference) => void;
};

export type { IUserStore };
