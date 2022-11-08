import { Button } from "flowbite-react";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../Services/Service";
import useTitle from "../../Hooks/useTitle";

const AllServices = () => {
  useTitle("All Services");
  AOS.init({ duration: 500 });
  const services = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-blue-400 text-center mt-10">
        There are total {services?.length} services I provide. Please check them
        Out
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-10 mt-10 w-3/4 mx-auto justify-evenly">
        {services.map((srvc) => (
          <Service key={srvc._id} service={srvc}></Service>
        ))}
      </div>
      <div className="w-[14rem] mx-auto mt-10">
        <Link to={"/addService"}>
          <Button gradientDuoTone="purpleToBlue">Add A Service</Button>
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
