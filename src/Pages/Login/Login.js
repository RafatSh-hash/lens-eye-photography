import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import login from "../../Assets/login.json";
import ParticlesBg from "particles-bg";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

import AOS from "aos";
import useTitle from "../../Hooks/useTitle";
const Login = () => {
  useTitle("Login");
  AOS.init({ duration: 500 });

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { loginWithEmailPass, googleLogin, setUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    //getting the location pathname

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //Login with email and password
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate(from, { replace: true });
        toast.success("Successfully Loged In!");
        form.reset();
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
        toast.error("Wrong Credentials ");
      });
  };

  //Login with Google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-20 mx-auto h-auto items-center justify-evenly">
        <div className="lg:w-1/3 sm:w-full md:w-1/3 p-8">
          <Lottie animationData={login} loop={true} />
        </div>
        <div
          data-aos="flip-left"
          className="lg:w-1/4 sm:w-full border-2 rounded-2xl border-blue-500 shadow-2xl md:w-1/4"
        >
          <form
            className="bg-blue-100 rounded-2xl py-5 px-5"
            onSubmit={handleLogin}
          >
            <div className="mb-6">
              <label className="block  text-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@user.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-center text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <p className="text-red-600">{error}</p>
            <div className="py-3">
              <Link
                to={"/register"}
                className="text-center text-small text-blue-500 px-4"
              >
                New Here ? Please Register
              </Link>
            </div>
            <button
              type="submit"
              // onClick={notify}
              className="text-white w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
            <Toaster />

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <span className="ml-3 text-center">Log In With Google</span>
            </button>
          </form>
        </div>
      </div>

      <ParticlesBg type="ball" bg={true} />
    </div>
  );
};

export default Login;
