import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { auth } = useContext(AuthContext);
  const isAuth: any = useMemo(
    () => useAuth(localStorage.getItem("token") || ""),
    [auth]
  );

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <div className="bg-light vw-100 vh-100 pt-0 d-flex justify-content-center align-items-center">
        <div
          className="container"
          style={{ minWidth: "75%", minHeight: "50%" }}
        >
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="row">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
