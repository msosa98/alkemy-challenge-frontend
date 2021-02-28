import React from "react";
import { FormLogin } from "../components/FormLogin";

export const Login = () => {
  return (
    <div className="container mt-md-5 border shadow p-5" data-aos="fade-right">
      <div className="row">
        <div className="col-12 col-md-6">
          <FormLogin />
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
