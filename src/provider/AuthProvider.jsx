// Import necessary Firebase authentication functions and auth
import { useState, useCallback } from "react";
import { auth } from "../store/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile as updateProfileFirebase,
} from "firebase/auth";

import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Sign up function
  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    setCurrentUser(user);
  };

  // Login function
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    setCurrentUser(user);
  };

  // Sign out function
  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  // Update user's profile function
  const updateProfile = useCallback(
    async (displayName) => {
      if (currentUser) {
        try {
          await updateProfileFirebase(currentUser, {
            displayName: displayName,
          });
          // Update the display name in the current user object
          setCurrentUser({ ...currentUser, displayName: displayName });
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      }
    },
    [currentUser]
  );

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
