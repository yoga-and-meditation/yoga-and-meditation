import { useState } from "react";
import { auth, app } from "../store/firebase"; // Removed 'app' import as it's not used here
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("");

  const signIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Successfully signed in
      setNotification("Login successful!"); // Set the notification
      clearForm();
      navigate("/user"); // Navigate immediately
    } catch (error) {
      console.log(error.message);
      setNotification("Error signing in."); // Set the error notification
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="bg-white signin-container">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark text-center">
                Sign in to your account
              </h1>
              <form
                onSubmit={signIn}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder=""
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>

                {/* Show password */}
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

                {/* Show notification if available */}
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
                    onClick={props.onSwitchForm}
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
    </>
  );
}

export default Login;
