import { useState } from "react";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function Authentication() {
  const [currentForm, setCurrentForm] = useState("login");

  const handleFormSwitch = () => {
    setCurrentForm(currentForm === "login" ? "signup" : "login");
  };

  return (
    <>
      {currentForm === "login" ? (
        <Signin onSwitchForm={handleFormSwitch} />
      ) : (
        <Signup onSwitchForm={handleFormSwitch} />
      )}
    </>
  );
}
export default Authentication;
