import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Blog from "../Pages/Blog/Blog";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import Service from "../Pages/Services/Service";
import MyReviews from "../Pages/MyReviews/MyReviews";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:1000/services"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:1000/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:1000/allservices"),
      },
      {
        path: "/allservices",
        element: <Service></Service>,
        loader: () => fetch("http://localhost:1000/allservices"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <Details></Details>,
        loader: ({ params }) => {
          return fetch(`http://localhost:1000/services/${params.id}`);
        },
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
