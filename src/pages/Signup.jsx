import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

function Signup() {
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Function to reset the input fields
  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const name = nameRef.current.value;

    if (password !== confirmPassword) {
      setNotification("Passwords do not match.");
    } else if (!email || !password || !name) {
      setNotification("Please fill in all fields.");
    } else {
      try {
        await signup(email, password, name);
        setNotification("User created successfully!");
        clearForm();

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.error("Signup Error:", error.message);
        setNotification(error.message);
      }
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark text-center">
              Create an account
            </h1>

            <form
              onSubmit={handleSignup}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Full Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Your email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Confirm password
                </label>
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-primary-600 dark-hover:bg-primary-700 dark:focus:ring-primary-800 border-none"
              >
                Create an account
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

              <p className="text-sm font-light text-gray-500 dark:text-dark-700">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  href="#"
                  className="font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-500 dark-hover:text-yellow-600 hover:no-underline dark-hover:no-underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
