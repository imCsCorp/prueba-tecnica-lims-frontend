import React from "react";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Profile | LIMS</title>
      </Helmet>
      <h1>Profile</h1>
    </React.Fragment>
  );
};

export default ProfilePage;
