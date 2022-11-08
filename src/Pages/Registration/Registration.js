import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registration from "../../Assets/registration.json";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { toast } from "material-react-toastify";
import { Toaster } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const Registration = () => {
  useTitle("Registration");
  AOS.init({ duration: 500 });
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, name);

    if (password.length < 6) {
      toast.error("Password should be 6 characters or more! Try Again");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password Must Contain Atleast One Upper Case Character");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      toast.error("Password Must Contain a numeric value");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("Password Must Contain a special Character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUser(name, photoURL);
      })
      .catch((e) => {
        console.log(e);
        setError(error.message);
      });

    const handleUpdateUser = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
    };
  };
  return (
    <div>
      <div className="lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-10  mx-auto h-auto items-center justify-evenly">
        <div
          data-aos="flip-right"
          className="border-2 border-blue-500 rounded-2xl lg:w-1/3 md:w-1/4 sm:w-full"
        >
          <form
            className="bg-blue-100 shadow-lg shadow-gray-400 rounded-2xl py-5 px-5"
            onSubmit={handleSignUp}
          >
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@email.com"
                required=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Photo
              </label>
              <input
                name="photoURL"
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fuser%2F150670&psig=AOvVaw2AKFrqHaUaFegOq2B3Jnd8&ust=1666729588991000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCTsNrZ-foCFQAAAAAdAAAAABAE"
                required=""
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <p className="text-red-600">{error}</p>
            <div className="py-3 text-center">
              <Link to={"/login"} className=" text-small text-blue-500">
                Already a Member ? Please Login
              </Link>
            </div>
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Register
            </button>
            <Toaster></Toaster>
          </form>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-full p-8">
          <Lottie animationData={registration} loop={true} />
        </div>
      </div>
      <ParticlesBg type="ball" bg={true} />
    </div>
  );
};

export default Registration;
