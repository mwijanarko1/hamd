import { auth, db, storage } from "./firebase";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Auth functions
export const logoutUser = () => signOut(auth);

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const resetUserPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

// Firestore functions
export const addDocument = (collectionName: string, data: any) =>
  addDoc(collection(db, collectionName), data);

export const getDocuments = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const updateDocument = (collectionName: string, id: string, data: any) =>
  updateDoc(doc(db, collectionName, id), data);

export const deleteDocument = (collectionName: string, id: string) =>
  deleteDoc(doc(db, collectionName, id));

// Storage functions
export const uploadFile = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

// Admin management functions
export const addAdminUser = async (userId: string) => {
  try {
    await addDoc(collection(db, 'admins'), {
      userId,
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    console.error('Error adding admin user:', error);
    return false;
  }
};

export const removeAdminUser = async (userId: string) => {
  try {
    const querySnapshot = await getDocs(
      collection(db, 'admins')
    );
    const adminDoc = querySnapshot.docs.find(
      doc => doc.data().userId === userId
    );
    if (adminDoc) {
      await deleteDoc(doc(db, 'admins', adminDoc.id));
    }
    return true;
  } catch (error) {
    console.error('Error removing admin user:', error);
    return false;
  }
};

export const checkIsAdmin = async (userId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'admins'));
    return querySnapshot.docs.some(doc => doc.data().userId === userId);
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};
