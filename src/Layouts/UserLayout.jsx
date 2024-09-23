import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../components/User/Header";
import { Footer } from "../components/User/Footer";

export const UserLayout = () => {
  return (
    <div className="userlayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
