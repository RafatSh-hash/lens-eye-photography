import { Accordion, Card, Table } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const service = useLoaderData();
  console.log(service);
  const {
    name,
    image,
    _id,
    R1Name,
    R2Name,
    R3Name,
    description,
    author,
    avatarimg,
    rating,
    reveiwA,
    reveiwB,
    reveiwC,
    review1img,
    review2img,
    review3img,
  } = service;
  return (
    <div>
      <h1 className="text-3xl my-10 text-center text-blue-500">
        Details are shown below about {service.name}
      </h1>
      <div>
        <div className="w-3/4 mx-auto">
          <Card imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="flex h-14 items-center w-full justify-between">
              <div className="flex justify-start h-14 items-center">
                <img
                  className="w-10 h-10 rounded-full "
                  src={avatarimg}
                  alt=""
                />
                <p className="mx-2">{author}</p>
              </div>
              <div>Rating : {rating}</div>
            </div>
          </Card>
        </div>
      </div>
      <h1 className="text-2xl mt-10 text-center py-10 text-black">
        Reviews are shown below about {service.name}
      </h1>
      <div className="w-3/4 mx-auto"></div>
    </div>
  );
};

export default Details;
