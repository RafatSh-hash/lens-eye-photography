import { Button, Carousel } from "flowbite-react";
import { toast } from "material-react-toastify";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Service from "../Services/Service";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useTitle("Lens Eye Photography");
  AOS.init({ duration: 500 });
  toast.success("Welcome To Lens Eye Photography!");
  const services = useLoaderData();

  return (
    <div>
      <Toaster></Toaster>
      {/* Card Section */}
      <div
        data-aos="fade-up"
        className="w-3/4 mx-auto border-2 border-black mt-20 mb-20 p-10 bg-gradient-to-bl from-blue-200 via-indigo-200 to-gray-400 rounded-2xl shadow-2xl drop-shadow-lg shadow-slate-500"
      >
        <h1 className="text-5xl pt-5 text-blue-700 font-bold text-center">
          Let Your Photos Be Alive. "That frame of mind that you need to make
          fine pictures of a very wonderful subject; you cannot do it by not
          being lost yourself."
          <div className="text-end ">
            <span className="text-2xl text-red-600 text-small">
              - Dorothea Lange
            </span>
          </div>
        </h1>
      </div>
      {/* Carousel Section */}
      <div data-aos="fade-up" className="w-3/4 mx-auto mt-10">
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://images.unsplash.com/photo-1520427112454-3b837428a76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1575414693443-2aa4c94800f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1496841733162-a88a250a275c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1477949775154-d739b82400b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              alt="..."
            />
          </Carousel>
          <Carousel>
            <img
              src="https://images.unsplash.com/photo-1563808601095-5b2e2e91a269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1576135872771-b3205260262f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              alt="..."
            />
            <img
              src="https://www.rmg.co.uk/sites/default/files/styles/max_width_1440/public/PS2195402171243_Highly%20Commended_Cosmic%20Plughole%20%C2%A9%20James%20Stone.jpg?itok=-N8wp_J8"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      {/*Card Section */}
      <div className="w-3/4 mx-auto mt-20 p-10 bg-white border-2 border-black rounded-2xl shadow-2xl">
        <h1 className="text-3xl pt-5 text-black font-bold text-center">
          I am photographer by passion, and here are some of the services I
          provide.
        </h1>
      </div>
      {/* Service Section */}
      <div className="w-3/4 mx-auto p-2 flex flex-wrap mt-10 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="w-[14rem] mx-auto mt-10">
        <Link to={"/allservices"}>
          <Button gradientDuoTone="purpleToBlue">Show All Services</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
