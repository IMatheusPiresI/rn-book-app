import firestore, { firebase } from '@react-native-firebase/firestore';

import { IBook } from '../../../books/types';

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

  const dataUser = doc.data() as IUserReference;

  return dataUser;
};

export const addBookToFavorites = async (userId: string, book: IBook) => {
  const docRef = usersCollection.doc(userId);

  await docRef.update({
    favorites: firebase.firestore.FieldValue.arrayUnion(book),
  });
};

export const removeBookToFavorites = async (userId: string, book: IBook) => {
  const docRef = usersCollection.doc(userId);

  await docRef.update({
    favorites: firebase.firestore.FieldValue.arrayRemove(book),
  });
};
