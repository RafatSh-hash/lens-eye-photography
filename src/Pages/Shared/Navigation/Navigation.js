import { Avatar, Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../Assets/logo1.png";
import { AuthContext } from "../../../Context/Context";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged out Successfully !", {
          position: "top-center",
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="shadow-xl">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/home">
          <img src={logo} className="w-10 h-10 rounded-full" alt="" />
          <span className="self-center whitespace-nowrap  text-2xl dark:text-white font-bold px-3 text-blue-600">
            LE-Photography
          </span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Link className="font-bold" to="/home" active={true}>
            Home
          </Link>

          <Link className="font-bold" to="/allservices">
            Services
          </Link>

          <Link className="font-bold" to="/blog">
            Blog
          </Link>
          {user ? (
            <>
              <Link className="font-bold" to="/myreviews">
                My Reviews
              </Link>
              <Link className="font-bold" to="/addService">
                Add Service
              </Link>
            </>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
        <div className="flex">
          <div className="">
            {user ? (
              <>
                <div className="flex">
                  <Button
                    onClick={handleLogOut}
                    outline={true}
                    gradientDuoTone="purpleToBlue"
                  >
                    Log Out
                  </Button>
                  <Toaster />
                  <img
                    className="w-10 h-10 hover:w-11 hover:h-11 rounded-full mx-3"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <Link className="mx-2" to={"/login"}>
                    <Button gradientDuoTone="purpleToBlue">Log In</Button>
                  </Link>
                  <Link className="mx-2" to={"/register"}>
                    <Button gradientDuoTone="purpleToBlue">Register</Button>
                  </Link>
                  <Avatar rounded={true}></Avatar>
                </div>
              </>
            )}
          </div>
        </div>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;
