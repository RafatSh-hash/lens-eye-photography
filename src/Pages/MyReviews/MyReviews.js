import { toast } from "material-react-toastify";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import ReviewDiv from "./ReviewDiv";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  //   Delete Review
  const handleDelete = (_id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => "Click Yes",
        },
      ],
    });

    if (confirmAlert) {
      fetch(` https://le-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("le-token")}`,
        },
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

  //   Update Review
  const handleUpdate = (id) => {
    console.log("Update", id);
  };

  //Requesting Review by email query
  useEffect(() => {
    setLoading(true);
    fetch(` https://le-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("le-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
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
