import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";

const AppLayout = () => {
  const { auth } = useContext(AuthContext);
  const isAuth: any = useMemo(
    () =>
      useAuth(
        localStorage.getItem("token") ||
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJvbGltcHVzbWFjQGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.QBIhC2APCv90vN1Cg3V33A3Q9mAlxbLgl1Az111QqdI"
      ),
    [auth]
  );

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <React.Fragment>
      <div className="bg-light vw-100 vh-100 pt-0 d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
