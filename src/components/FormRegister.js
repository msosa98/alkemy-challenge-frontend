import React, { useState } from "react";
import { register } from "../helpers/register";
import { showAlert } from "../helpers/showAlert";
import { Spinner } from "./Spinner";

export const FormRegister = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      setLogged(false);
      setError(true);
      setErrorMessage("Missing Fields");
    } else {
      try {
        setLoading(true);
        await register(firstname, lastname, email, password)
          .then(setLoading(false))
          .then(setLogged(true));
        setError(false);
      } catch (e) {
        setLogged(false);
        setLoading(false);
        setError(true);
        setErrorMessage("The email already exists");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <h2 className="text-center mb-4 border-bottom py-4">Sign Up</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Firstname</label>
        <input
          autoComplete="none"
          type="text"
          className="form-control mb-3"
          onChange={handleChangeFirstname}
          value={firstname}
        />
        <label htmlFor="exampleInputEmail1">Lastname</label>
        <input
          autoComplete="none"
          type="text"
          className="form-control mb-3"
          onChange={handleChangeLastname}
          value={lastname}
        />
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          autoComplete="none"
          type="email"
          className="form-control mb-3"
          onChange={handleChangeEmail}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          autoComplete="none"
          type="password"
          className="form-control mb-3"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <button className="btn btn-primary btn-block">Sign Up</button>
      <div className="spinner-container">{loading && <Spinner />}</div>
      {error && showAlert("danger", errorMessage)}
      {logged && showAlert("success", "Successfully registered user", true)}
    </form>
  );
};
