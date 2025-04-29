// auth provider setup

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import api from "../services/axios/axios";
import { auth } from "../services/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // create user  using email and password

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // create users using google sign in

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // login user using email and password

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  observe user state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        try {
          // Wait for displayName to be set
          const waitForName = async () => {
            while (!user.displayName) {
              await user.reload();
              await new Promise((res) => setTimeout(res, 200));
            }
          };

          await waitForName();

          const { uid, displayName: name, email, photoURL: photo } = user;
          await api.post("/users", { uid, name, email, photo });
          console.log("✅ Synced after name arrived:", name);
        } catch (error) {
          console.error("Error syncing user data:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      setLoading(false); // Ensure loading is false when there is an error
    }
  }, [loading, user]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
    updateUserProfile,
    googleSignIn,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
