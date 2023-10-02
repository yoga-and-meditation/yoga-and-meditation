import { useState, useEffect } from "react";
import { auth } from "../store/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile as updateProfileFirebase,
} from "firebase/auth";

import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Sign up function
  const signup = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        // Update the display name
        await updateProfileFirebase(user, {
          displayName: displayName,
        });

        // Update the current user state with the updated user object
        setCurrentUser(user);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Function to update display name
  const updateDisplayName = async (newDisplayName) => {
    try {
      if (currentUser) {
        // Check if currentUser is not null
        await updateProfileFirebase(currentUser, {
          displayName: newDisplayName,
        });

        // Update the current user state with the updated user object
        setCurrentUser({ ...currentUser, displayName: newDisplayName });
      }
    } catch (error) {
      console.error("Error updating display name:", error);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setCurrentUser(user);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Sign out function
  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateDisplayName, // Make sure to include the updateDisplayName function in the value
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
