import { create } from 'zustand';

import { IUserStore } from './types';

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user,
    })),
}));
