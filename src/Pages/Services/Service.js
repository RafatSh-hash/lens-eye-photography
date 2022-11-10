import { Button, Card } from "flowbite-react";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { _id, author, image, description, avatarimg, name, rating } = service;

  AOS.init({ duration: 500 });
  return (
    <div
      data-aos="zoom-in"
      className="w-[20rem] h-full shadow-2xl rounded-2xl "
    >
      <PhotoProvider>
        <PhotoView src={image}>
          <Card imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {description?.length > 100
                ? description?.slice(0, 200) + "..."
                : description}
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
            <Link to={`/services/${_id}`}>
              <Button gradientDuoTone="cyanToBlue">Show Details</Button>
            </Link>
          </Card>
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Service;
