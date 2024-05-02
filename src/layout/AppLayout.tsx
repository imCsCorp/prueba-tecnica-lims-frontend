import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="bg-light vw-100 vh-100 pt-0 d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
