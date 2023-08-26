import { useState } from "react";
import { auth, app } from "../store/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate("");

  const signUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password !== confirmPassword) {
      setNotification("Passwords do not match.");
      return;
    }

    if (!name || !email || !password) {
      setNotification("Please fill in all fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setNotification("User created successfully!");
      clearForm();

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Signup Error:", error.message);
      setNotification(error.message);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark text-center">
                Create an account
              </h1>

              <form
                onSubmit={signUp}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    placeholder=""
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    placeholder=""
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder=""
                    className="border border-gray-300 rounded-lg focus:ring-yellow-600 focus:border-yellow-600 focus:ring-1 focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-none"
                >
                  Create an account
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

                <p className="text-sm font-light text-gray-500 dark:text-dark-700">
                  Already have an account?{" "}
                  <a
                    onClick={props.onSwitchForm}
                    href="#"
                    className="font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-500 dark:hover:text-yellow-600 hover:no-underline dark:hover:no-underline"
                  >
                    Login here
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

export default Signup;
