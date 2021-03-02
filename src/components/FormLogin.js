import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/authActions";
import { loadBalance, loadOperations } from "../redux/actions/operationActions";
import { login } from "../helpers/login";
import { getOperations } from "../helpers/getOperations";
import { showAlert } from "../helpers/showAlert";
import { getBalance } from "../helpers/getBalance";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      setErrorMessage("Missing Fields");
    } else {
      try {
        setError(false);
        const creds = await login(email, password);
        const operations = await getOperations(creds.token, creds.user);
        const balance = await getBalance(creds.token, creds.user);
        dispatch(loadOperations(operations));
        dispatch(loadBalance(balance));
        dispatch(signin(creds));
      } catch (e) {
        console.log(e);
        setError(true);
        setErrorMessage("The username or password is incorrect");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <h2 className="text-center mb-4 border-bottom py-4">Sign In</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          autoComplete="none"
          type="email"
          className="form-control"
          onChange={handleChangeEmail}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          autoComplete="none"
          type="password"
          className="form-control"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <div className="form-group form-check" />
      <button className="btn btn-primary btn-block">Sign In</button>
      {error && showAlert("danger", errorMessage)}
    </form>
  );
};
