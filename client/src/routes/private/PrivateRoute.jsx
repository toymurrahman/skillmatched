import React, { useContext } from "react";
import { AuthContext } from "./../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"> <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-black border-teal-500"></div></div>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
