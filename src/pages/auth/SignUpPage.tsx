import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import CheckboxField from "../../components/CheckboxField";

const SignUpPage = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        firtsName: "",
        lastName: "",
        email: "",
        password: "",
        terms: false,
      },
      validationSchema: Yup.object({
        firtsName: Yup.string().min(3).required(),
        lastName: Yup.string(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        terms: Yup.boolean().isTrue(),
      }),
      onSubmit: (form) => {
        console.log(form);
      },
    });
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
          <form className="" onSubmit={handleSubmit}>
            <InputField
              id="firtsName"
              value={values.firtsName}
              label="Nombres"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <InputField
              id="lastName"
              value={values.lastName}
              label="Apellidos"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

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
              id="terms"
              label="Acepto los terminos y condiciones."
              value={values.terms}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <div className="mb-3">
              <button className="btn btn-primary w-100">Registrarme</button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            <p>
              Ya tienes cuenta{" "}
              <Link className="small" to="/auth/sign-in">
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
