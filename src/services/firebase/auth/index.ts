import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { CLI_ID_GOOGLE } from '../../../resources/config';
import { IUserReference } from '../firestore/user/types';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const result = await auth().signInWithEmailAndPassword(email, password);

  const user = {
    id: result.user.uid,
    email: result.user.email,
  };

  return user;
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const result = await auth().createUserWithEmailAndPassword(email, password);

  const user = {
    id: result.user.uid,
    email: result.user.email ?? '',
  };

  return user;
};

export const googleConfigure = () => {
  GoogleSignin.configure({
    webClientId: CLI_ID_GOOGLE,
  });
};

export const loginWithGogleProvider = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices();
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const result = await auth().signInWithCredential(googleCredential);

  const user: IUserReference = {
    id: result.user.uid,
    email: result.user.email ?? '',
    name: result.user.displayName ?? '',
  };
  return user;
};
