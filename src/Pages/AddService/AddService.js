import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const image = form.image.value;
    const photoURL = form.photoURL.value;
    const serviceName = form.serviceName.value;
    const description = form.message.value;
    const avatarimg = user?.photoURL;

    const service = {
      serviceName,
      email,
      name,
      description,
      avatarimg,
      image,
      photoURL,
    };

    fetch("http://localhost:1000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowleged) {
          toast.success("service created successfully", {
            position: "top-center",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="bg-red-100 rounded-2xl w-1/2 mx-auto shadow-lg mt-5 py-10">
        <h1 className="text-2xl font-bold text-blue-500 text-center">
          Add Service Here
        </h1>
        <h1 className="text-lg font-bold text-center">
          <i className="text-red-500 font-bold">
            Please add a service only related to Photography
          </i>
        </h1>
      </div>
      <form
        onSubmit={handleAddService}
        className="flex w-3/4 bg-blue-200 rounded-2xl shadow-2xl p-10  mx-auto mt-10 flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Service Name" />
          </div>
          <TextInput
            id="small"
            name="serviceName"
            type="text"
            sizing="sm"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Service Thumbnail URL" />
          </div>
          <TextInput id="small" name="image" type="text" sizing="sm" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Service Provider Name" />
          </div>
          <TextInput
            id="base"
            name="name"
            defaultValue={user?.displayName}
            type="text"
            sizing="md"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Service Provider PhotURL" />
          </div>
          <TextInput
            id="base"
            name="photoURL"
            defaultValue={user?.photoURL}
            type="text"
            sizing="md"
            required
            readOnly
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Service Provider Email" />
          </div>
          <TextInput
            id="base"
            name="email"
            defaultValue={user?.email}
            type="text"
            sizing="md"
            readOnly
            required
          />
        </div>
        <div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value="Service description(musn't exclude 200 characters)"
              />
            </div>
            <Textarea
              id="comment"
              name="message"
              placeholder="Description Here..."
              required={true}
              rows={4}
            />
          </div>
        </div>
        <div className="w-1/4 mx-auto">
          <Button type="submit" gradientMonochrome="info">
            Add Service
          </Button>
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddService;
