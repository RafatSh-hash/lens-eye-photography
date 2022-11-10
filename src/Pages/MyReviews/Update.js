import { Button, Card, Textarea } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Update = () => {
  useTitle("Update Review");
  const navigate = useNavigate();
  const oldReview = useLoaderData();
  const { _id, Username, email, photoURL, review, serviceName, service } =
    oldReview;
  console.log(oldReview);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReview = form.newrvw.value;
    // const review = newReview;
    const updatedReview = {
      review: newReview,
      _id,
      Username,
      email,
      photoURL,
      serviceName,
      service,
    };
    console.log(updatedReview);

    fetch(` https://le-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("le-token")}`,
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated Successfully!");
          console.log(data);
          navigate("/myreviews");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-2/5 mx-auto rounded-2xl shadow-2xl my-10">
      <Card className="bg-gray-300">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={photoURL}
            alt={Username}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {Username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <small> {email}</small>
          </span>

          <div className="w-full">
            <form onSubmit={handleUpdate}>
              <div className="w-full py-3">
                <Textarea name="newrvw" defaultValue={review}></Textarea>
              </div>
              <div className="py-3 w-2/5 mx-auto">
                <Button type="submit" gradientMonochrome="info">
                  Update Review
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Update;
