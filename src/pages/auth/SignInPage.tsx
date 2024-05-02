import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sign In | LIMS</title>
      </Helmet>
      <div className="col-lg-6 d-none d-lg-block bg-signin-image" />
      <div className="col-lg-6">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
          </div>
          <form className="">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo electronico"
              />
              <label htmlFor="email">Correo electronico</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
              />
              <label htmlFor="email">Contraseña</label>
            </div>

            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Recordarme
              </label>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary w-100">Ingresar</button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            <Link className="small" to="/auth/forgot-password">
              Olvide mi contraseña?
            </Link>
          </div>
          <div className="text-center">
            <p>
              No tengo cuenta y quiero{" "}
              <Link className="small" to="/auth/sign-up">
                crear una.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignInPage;
