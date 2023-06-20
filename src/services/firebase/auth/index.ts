import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { toastError } from '../../../components/Toast/config';
import { CLI_ID_GOOGLE } from '../../../resources/config';
import { useUserStore } from '../../../store/user';
import {
  checkUserExists,
  createUserReferenceFirestore,
  getUserById,
} from '../firestore/user';
import { IUserReference } from '../firestore/user/types';

import { IAuthStageChange, IFirebaseAuthError } from './type';

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
    forceCodeForRefreshToken: true,
  });
};

export const loginWithGogleProvider = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices();

  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  const result = await auth().signInWithCredential(googleCredential);

  const user: IUserReference = {
    id: result.user.uid,
    email: result.user.email ?? '',
    name: result.user.displayName ?? '',
  };
  return user;
};

export const signInOrRegisterWithGoogleProvider = async () => {
  try {
    const userCredential = await loginWithGogleProvider();

    const userExists = await checkUserExists(userCredential.id);
    if (!userExists) {
      await createUserReferenceFirestore(userCredential);
      useUserStore.setState(() => ({
        user: userCredential,
      }));
      return;
    }

    const user = await getUserById(userCredential.id);
    useUserStore.setState(() => ({
      user: user,
    }));
  } catch (err) {
    const firebaseError = err as IFirebaseAuthError;

    if (
      firebaseError.message.includes('Sign in action cancelled') ||
      firebaseError.message.includes('The user canceled the sign-in flow')
    )
      return;

    toastError('Authentication with Google error, try again!');
  }
};

export const authStageChange = async ({
  setInitializing,
}: IAuthStageChange) => {
  auth().onAuthStateChanged(async (userCredential) => {
    if (userCredential) {
      console.log('com user');
      const user = await getUserById(userCredential.uid);

      useUserStore.setState({
        user,
      });
      setInitializing(false);
      return;
    }
    setInitializing(false);
  });
};
