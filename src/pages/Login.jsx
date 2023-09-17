import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../context/useAuth";
function Login() {
  const [notification, setNotification] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const clearForm = () => {
    Object.values(inputRefs).forEach((ref) => {
      ref.current.value = "";
    });
  };

  const { email, password } = inputRefs; // Destructure the inputRefs

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email.current.value, password.current.value);
      setNotification("Login successful!");
      clearForm();
      navigate("/user");
    } catch (error) {
      console.error("Login Error:", error.message);
      setNotification("Error signing in.");
    }
  };

  return (
    <section className="bg-white signin-container">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark text-center">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleLogin}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              {["email", "password"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    {field === "email" ? "Your email" : "Password"}
                  </label>
                  <input
                    ref={inputRefs[field]}
                    type={
                      field === "password" && showPassword ? "text" : "password"
                    }
                    name={field}
                    id={field}
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
              ))}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2 text-primary-600 dark:text-primary-500"
                />
                <label
                  htmlFor="showPassword"
                  className="text-sm font-medium text-black dark:text-white cursor-pointer"
                >
                  Show Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-none"
              >
                Sign in
              </button>

              {notification && (
                <p
                  className={`text-center text-sm ${
                    notification.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {notification}
                </p>
              )}

              <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  onClick={() => navigate("/signup")}
                  href="#"
                  className="font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-500 dark:hover:text-yellow-600 hover:no-underline dark:hover:no-underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
