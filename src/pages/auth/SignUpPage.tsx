import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sign Up | LIMS</title>
      </Helmet>
      <div className="col-lg-6 d-none d-lg-block bg-signup-image" />
      <div className="col-lg-6">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Crear una cuenta!</h1>
          </div>
          <form className="">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="firtsName"
                placeholder="Nombres"
              />
              <label htmlFor="firtsName">Nombres</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Apellidos"
              />
              <label htmlFor="lastName">Apellidos</label>
            </div>
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
              <label htmlFor="email">Contaseña</label>
            </div>

            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="terms"
              />
              <label className="form-check-label" htmlFor="terms">
                Acepto los terminos y condiciones.
              </label>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary w-100">Registrarme</button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            <p>
              Ya tienes cuenta{" "}
              <Link className="small" to="/auth/sign-up">
                ingresa aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
