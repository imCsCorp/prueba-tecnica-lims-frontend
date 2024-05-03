import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axiosInterceptor from "../../config/axiosInterceptor";
import axiosClient from "../../config/axiosClient";
import { BadRequest } from "../../utils/responses";
import { User } from "../../interfaces/user";

const ProfilePage = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    axiosInterceptor();
    axiosClient
      .get("user/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(BadRequest);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Profile | LIMS</title>
      </Helmet>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title h5 text-center mb-4">Mis datos</h1>
          <div className="mb-3">
            <p>Nombres: {user.firstName}</p>
          </div>
          <div className="mb-3">
            <p>Apellidos: {user.lastName}</p>
          </div>
          <div className="mb-3">
            <p>Correo electronico: {user.email}</p>
          </div>
          <div className="mb-3">
            <p>Estado: {user.active ? "Activo" : "Inactivo"}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
