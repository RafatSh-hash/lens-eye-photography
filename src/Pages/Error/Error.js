import React from "react";
import Lottie from "lottie-react";
import error from "../../Assets/ERR.json";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
const Error = () => {
  useTitle("Error");
  return (
    <div className="w-9/11 mx-auto h-auto items-center mb-10">
      <div>
        <div className="w-2/4  mx-auto">
          <Lottie animationData={error} loop={true} />
        </div>
        <p className="text-red-500 text-center">
          Sorry! Something must've went Wrong!
        </p>
        <div className="mt-5 w-32 mx-auto">
          <Link to={"/home"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
