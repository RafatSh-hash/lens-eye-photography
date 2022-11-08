import React from "react";
import { Outlet } from "react-router-dom";
import FooterNav from "../Pages/Shared/FooterNav/FooterNav.js";
import Navigation from "../Pages/Shared/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <FooterNav></FooterNav>
    </div>
  );
};

export default Main;
