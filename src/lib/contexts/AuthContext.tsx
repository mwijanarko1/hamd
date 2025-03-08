"use client";

import React, { createContext, useEffect, useState } from "react";
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User
} from "firebase/auth";
import { auth } from "../firebase/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  isEmailVerified: boolean;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  authError: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  sendVerificationEmail: async () => {},
  isEmailVerified: false,
  signUpWithEmail: async () => {},
  signInWithEmail: async () => {},
  authError: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Only set the user if they're verified or if they're a Google user
      if (user) {
        if (user.emailVerified || user.providerData[0]?.providerId === 'google.com') {
          setUser(user);
          setIsEmailVerified(user.emailVerified);
        } else {
          // If email is not verified, don't set the user
          setUser(null);
          setIsEmailVerified(false);
        }
      } else {
        setUser(null);
        setIsEmailVerified(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      setAuthError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      // Don't set the user here - they need to verify their email first
      setUser(null);
    } catch (error: any) {
      console.error("Error signing up with email", error);
      setAuthError(error.message);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setAuthError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        await signOutUser();
        setAuthError("Please verify your email before signing in. Check your inbox for the verification link.");
        throw new Error("Email not verified");
      }
    } catch (error: any) {
      console.error("Error signing in with email", error);
      setAuthError(error.message);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setAuthError(null);
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Error signing in with Google", error);
      setAuthError(error.message);
    }
  };

  const signOutUser = async () => {
    try {
      setAuthError(null);
      await firebaseSignOut(auth);
    } catch (error: any) {
      console.error("Error signing out", error);
      setAuthError(error.message);
    }
  };

  const sendVerificationEmail = async () => {
    if (user && !user.emailVerified) {
      try {
        setAuthError(null);
        await sendEmailVerification(user);
      } catch (error: any) {
        console.error("Error sending verification email", error);
        setAuthError(error.message);
        throw error;
      }
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        signInWithGoogle, 
        signOut: signOutUser,
        sendVerificationEmail,
        isEmailVerified,
        signUpWithEmail,
        signInWithEmail,
        authError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
