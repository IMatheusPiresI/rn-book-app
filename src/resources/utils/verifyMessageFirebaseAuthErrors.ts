export const verifyMessageFirebaseAuthErrors = (errorCode: string) => {
  let errorMessage = '';

  switch (errorCode) {
    case 'auth/invalid-email':
      errorMessage = 'Invalid email address.';
      break;
    case 'auth/user-disabled':
      errorMessage = 'The user account has been disabled.';
      break;
    case 'auth/user-not-found':
      errorMessage = 'User not found.';
      break;
    case 'auth/wrong-password':
      errorMessage = 'Invalid password.';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'The email address is already in use.';
      break;
    default:
      errorMessage = 'An unknown error occurred.';
      break;
  }

  return errorMessage;
};
