import React from "react";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 | LIMS</title>
      </Helmet>
      <h1>404</h1>
    </React.Fragment>
  );
};

export default NotFoundPage;
