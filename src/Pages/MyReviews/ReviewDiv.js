import { Button } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewDiv = ({ singlereview, handleDelete, handleUpdate }) => {
  const { _id, Username, email, photoURL, review, service, serviceName } =
    singlereview;

  //   const [reviewService, setReviewService] = useState({});

  //   useEffect(() => {
  //     fetch(`http://localhost:1000/reviews/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <div className="w-4/5 mx-auto mt-10 h-auto bg-slate-200 px-4 py-2 rounded-2xl items-center flex justify-evenly">
      <div className="mx-2">
        <Button onClick={() => handleDelete(_id)} color="failure" pill={true}>
          Delete
        </Button>
      </div>
      <div className="flex justify-start h-14 items-center">
        <img className="w-10 h-10 rounded-full " src={photoURL} alt="" />
        <p className="mx-2">{Username}</p>
      </div>
      <div className="flex justify-evenly">
        <p>{serviceName}</p>
        <div>
          <small>{review}</small>
        </div>
      </div>
      <div>
        <Link to={"/update"}>
          <Button color="purple" pill={true}>
            Update
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewDiv;
