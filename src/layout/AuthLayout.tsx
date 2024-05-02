import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
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
