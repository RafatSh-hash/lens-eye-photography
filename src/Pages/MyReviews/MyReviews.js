import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/reviews?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user?.email]);

  return <div></div>;
};

export default MyReviews;
