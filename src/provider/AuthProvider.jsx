import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import AuthContext from "../context/AuthContext";
import authReducer from "../reducer/authReducer"; // Assuming you have imported the reducer correctly

// Import auth directly, not as a default export
import { auth } from "../store/firebase";

function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(authReducer, {});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch({ type: "signin", payload: user });
      } else {
        dispatch({ type: "signout" });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signUp = async (formValues) => {
    dispatch({ type: "fetching" });

    try {
      await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      await sendEmailVerification(auth.currentUser);
      navigate("/");
    } catch ({ code, message }) {
      dispatch({ type: "error", payload: { code, message } });
    }
  };

  const signIn = async (formValues) => {
    dispatch({ type: "fetching" });

    try {
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      navigate("/profile");
    } catch ({ code, message }) {
      dispatch({ type: "error", payload: { code, message } });
    }
  };

  const logOut = async () => {
    dispatch({ type: "fetching" });

    try {
      await signOut(auth);
    } catch ({ code, message }) {
      dispatch({ type: "error", payload: { code, message } });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
