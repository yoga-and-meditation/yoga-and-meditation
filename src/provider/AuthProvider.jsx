import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <AuthContext.Provider
        value={{
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
