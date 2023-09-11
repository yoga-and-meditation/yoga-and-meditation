import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function User() {
  const { name } = useContext(AuthContext);
  console.log(name);

  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default User;
