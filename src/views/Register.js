import React from "react";
import { FormRegister } from "../components/FormRegister";

export const Register = () => {
  return (
    <div className="container mt-md-4 border shadow p-5" data-aos="fade-right">
      <div className="row">
        <div className="col-12 col-md-6">
          <FormRegister />
        </div>
        <div className="col-12 col-md-6 mt-md-5">
          <img
            className="img-fluid"
            src={window.location.origin + "/img/auth.svg"}
            alt="home-img"
          />
        </div>
      </div>
    </div>
  );
};
