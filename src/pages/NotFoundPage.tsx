import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 | LIMS</title>
      </Helmet>
      <div className="container text-center mt-5">
        <h1 className="display-1">404</h1>
        <p className="lead">Oops! La página que buscas no se encontró.</p>
        <Link to="/" className="btn btn-primary">
          Volver a la página de inicio
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
