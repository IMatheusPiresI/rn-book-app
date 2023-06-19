import React from 'react';

type IRegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type IProps = {
  loadingGoogle: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type { IRegisterForm, IProps };
