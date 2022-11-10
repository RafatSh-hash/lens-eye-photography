import React from "react";

const Review = ({ rvw }) => {
  const { Username, photoURL, review } = rvw;
  return (
    <div className="my-2">
      <div className="w-3/5 mx-auto mt-10 h-auto bg-slate-200 px-4 py-2 rounded-2xl items-center flex justify-between">
        <div className="flex justify-start h-14 mx-3 items-center">
          <img className="w-10 h-10 rounded-full " src={rvw?.photoURL} alt="" />
          <p className="mx-2">{rvw?.Username}</p>
        </div>
        <div>
          <p>{rvw?.serviceName}</p>
        </div>
        <div>
          <small>{rvw?.review}</small>
        </div>
      </div>
    </div>
  );
};

export default Review;
