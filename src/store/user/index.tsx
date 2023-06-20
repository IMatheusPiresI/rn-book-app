import { create } from 'zustand';

import { IUserStore } from './types';

const initialState = {
  email: '',
  id: '',
  name: '',
  favorites: [],
};
export const useUserStore = create<IUserStore>((set) => ({
  user: initialState,
  setUser: (user) =>
    set(() => ({
      user,
    })),
  addToFavorites: (book) =>
    set((state) => ({
      user: {
        ...state.user,
        favorites: state?.user?.favorites
          ? [...state.user.favorites, book]
          : [book],
      },
    })),
  removeToFavorites: (book) =>
    set((state) => ({
      user: {
        ...state.user,
        favorites: state.user.favorites?.filter((b) => b.id !== book.id),
      },
    })),
  logout: () =>
    set(() => ({
      user: initialState,
    })),
}));
