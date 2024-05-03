import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  const { auth } = useContext(AuthContext);
  const isAuth: any = useMemo(
    () => useAuth(localStorage.getItem("token") || ""),
    [auth]
  );

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-light vw-100 vh-100 pt-0 d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
