import { createContext } from "react";

const initialState = {
  user: null,
  error: null,
  loading: null,
};

const AuthContext = createContext(initialState);

export default AuthContext;
