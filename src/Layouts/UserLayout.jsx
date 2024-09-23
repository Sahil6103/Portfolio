import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../Components/User/Header";
import { Footer } from "../Components/User/Footer";

export const UserLayout = () => {
  return (
    <div className="userlayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
