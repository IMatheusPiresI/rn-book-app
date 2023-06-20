type IFirebaseAuthError = {
  code: string;
  message: string;
};

type IAuthStageChange = {
  setInitializing: (value: false) => void;
};
export type { IFirebaseAuthError, IAuthStageChange };
