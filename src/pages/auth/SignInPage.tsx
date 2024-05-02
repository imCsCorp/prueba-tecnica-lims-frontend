import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import CheckboxField from "../../components/CheckboxField";
import InputField from "../../components/InputField";

const SignInPage = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "", rememberMe: false },
      validationSchema: Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        rememberMe: Yup.boolean(),
      }),
      onSubmit: (form) => {
        console.log(form);
      },
    });
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
          <form className="" onSubmit={handleSubmit}>
            <InputField
              id="email"
              type="email"
              value={values.email}
              label="Correo electronico"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <InputField
              id="password"
              type="password"
              value={values.password}
              label="Contraseña"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <CheckboxField
              id="rememberMe"
              label="Recordarme"
              value={values.rememberMe}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">
                Ingresar
              </button>
            </div>
          </form>
          <br />
          <hr />
          <br />
          {/* <div className="text-center">
            <Link className="small" to="/auth/forgot-password">
              Olvide mi contraseña?
            </Link>
          </div> */}
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
