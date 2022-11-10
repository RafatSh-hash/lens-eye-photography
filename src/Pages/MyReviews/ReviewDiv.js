import { Button } from "flowbite-react";
import React from "react";

import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewDiv = ({ singlereview, handleDelete, handleUpdate }) => {
  const { _id, Username, photoURL, review, serviceName } = singlereview;

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
      </div>
      <div className="flex justify-between mx-2">
        <div>
          <small>{review}</small>
        </div>
        <div>
          <Link to={`/update/${_id}`}>
            <Button color="purple" pill={true}>
              <FaPenAlt></FaPenAlt>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewDiv;
