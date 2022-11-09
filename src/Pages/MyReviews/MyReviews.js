import { toast } from "material-react-toastify";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import ReviewDiv from "./ReviewDiv";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleDelete = (_id) => {
    const agree = window.confirm(
      "Are you sure you want to delete the review ?"
    );
    if (agree) {
      fetch(`http://localhost:1000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("The review is deleted successfully!");
            const remaining = reviews.filter((rvw) => rvw._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {};

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user?.email]);
  return (
    <div>
      {reviews.map((singlereview) => (
        <ReviewDiv
          key={singlereview._id}
          singlereview={singlereview}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        ></ReviewDiv>
      ))}
    </div>
  );
};

export default MyReviews;
