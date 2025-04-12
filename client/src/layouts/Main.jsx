import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)] flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
