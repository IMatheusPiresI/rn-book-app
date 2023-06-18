import firestore from '@react-native-firebase/firestore';

import { IUserReference } from './types';

const usersCollection = firestore().collection('users');

export const createUserReferenceFirestore = async (user: IUserReference) => {
  await usersCollection.doc(user.id).set(user);
};

export const checkUserExists = async (uid: string) => {
  const docRef = usersCollection.doc(uid);
  const doc = await docRef.get();
  return doc.exists;
};

export const getUserById = async (id: string) => {
  const docRef = usersCollection.doc(id);
  const doc = await docRef.get();

  return doc.data();
};
