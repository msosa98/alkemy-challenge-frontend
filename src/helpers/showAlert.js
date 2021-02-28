import React from "react";
import { Link } from "react-router-dom";

export const showAlert = (color, message, isLogged = false) => (
  <div className={`alert alert-${color} text-center mt-4`} role="alert">
    {message}
    {isLogged && <Link to="/signin"> Login</Link>}
  </div>
);
