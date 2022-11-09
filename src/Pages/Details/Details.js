import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";

const Details = () => {
  useTitle("Service Details");
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  const { name, image, _id, description, author, avatarimg, rating } = service;

  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const photoURL = user.photoURL;
    const Username = user.displayName;
    const review = form.review.value;
    const email = user?.email || "unregisterd";

    console.log(photoURL, Username, review, email);
    const Review = {
      service: _id,
      serviceName: name,
      photoURL,
      Username,
      review,
      email,
    };

    fetch("http://localhost:1000/usersreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Posted successfully!");
          form.reset();
        }
      });
  };

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
      <div className="w-1/2 mx-auto">
        <form onSubmit={addReview} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="User Name" />
            </div>
            <TextInput
              defaultValue={user?.displayName}
              readOnly
              id="small"
              type="text"
              name="name"
              sizing="sm"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="User Photo URL" />
            </div>
            <TextInput
              defaultValue={user?.photoURL}
              id="small"
              type="text"
              name="photoURL"
              sizing="sm"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Service Name" />
            </div>
            <TextInput
              defaultValue={service.name}
              readOnly
              id="base"
              type="text"
              name="serviceName"
              sizing="md"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Review" />
            </div>
            <TextInput id="large" type="text" name="review" sizing="lg" />
          </div>
          <div className="w-1/2 mx-auto">
            <Button type="submit" gradientMonochrome="info">
              Submit
            </Button>
            <Toaster></Toaster>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
