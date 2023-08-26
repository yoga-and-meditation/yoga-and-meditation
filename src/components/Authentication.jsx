import { useState } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Authentication() {
  const [currentForm, setCurrentForm] = useState("login");

  const handleFormSwitch = () => {
    setCurrentForm(currentForm === "login" ? "signup" : "login");
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onSwitchForm={handleFormSwitch} />
      ) : (
        <Signup onSwitchForm={handleFormSwitch} />
      )}
    </>
  );
}
export default Authentication;
