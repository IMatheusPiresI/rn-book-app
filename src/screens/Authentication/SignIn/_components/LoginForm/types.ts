import React from 'react';

type ISignInForm = {
  email: string;
  password: string;
};

type IProps = {
  loadingGoogle: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type { ISignInForm, IProps };
