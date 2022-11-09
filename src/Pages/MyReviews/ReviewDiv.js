import { Button } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewDiv = ({ singlereview, handleDelete, handleUpdate }) => {
  const { _id, Username, email, photoURL, review, service, serviceName } =
    singlereview;

  return (
    <div className="w-4/5 mx-auto mt-10 h-auto bg-slate-200 px-4 py-2 rounded-2xl items-center flex justify-between">
      <div className="mx-2">
        <Button onClick={() => handleDelete(_id)} color="failure" pill={true}>
          <FaTrashAlt></FaTrashAlt>
        </Button>
      </div>
      <div className="flex justify-start h-14 mx-3 items-center">
        <img className="w-10 h-10 rounded-full " src={photoURL} alt="" />
        <p className="mx-2">{Username}</p>
      </div>
      <div className="flex justify-evenly">
        <p>{serviceName}</p>
        <div>
          <small>{review}</small>
        </div>
      </div>
      <div className="w-[3rem]">
        <Link to={`/update/${_id}`}>
          <Button color="purple" pill={true}>
            <FaPenAlt></FaPenAlt>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewDiv;
