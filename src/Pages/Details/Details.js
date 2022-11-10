import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import Review from "./Review";

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

    //Adding Review
    fetch(" https://le-server.vercel.app/usersreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("le-token")}`,
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

  //Fetch review
  useEffect(() => {
    fetch(` https://le-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

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
      {/* Show Reviews */}

      <div>
        {reviews?.length === 0 ? (
          <p className="text-3xl text-red-400 text-center">
            No reviews has been posted yet for {service.name}
          </p>
        ) : (
          <div className="flex flex-col-reverse">
            {reviews.map((rvw) => (
              <Review key={rvw._id} rvw={rvw}></Review>
            ))}
          </div>
        )}
      </div>

      {/* Add A review */}
      {user ? (
        <>
          <div className="w-1/2 mx-auto">
            <div className="my-10">
              <h1 className="text-center font-bold text-2xl text-slate-500 ">
                Add a review for {author}'s service.
              </h1>
            </div>
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
        </>
      ) : (
        <>
          <div className="w-3/4 mx-auto my-10">
            <h1 className="text-2xl text-center">
              Please{" "}
              <span className="text-blue-500">
                <Link to={"/login"}>Login </Link>
              </span>
              to Add a Review for {service.name}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
