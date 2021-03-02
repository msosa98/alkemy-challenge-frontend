import React from "react";
import { logout } from "../redux/actions/authActions";

const { useSelector, useDispatch } = require("react-redux");
const { Link } = require("react-router-dom");

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-primary bg-light border mb-5">
      <div className="container">
        <Link to="/dashboard" className="navbar-brand text-dark">
          {user.firstname} {user.lastname}
        </Link>
        <ul className="navbar nav">
          <li className="mr-4">
            <Link to="/operations" className="btn btn-outline-primary">
              All Operations
            </Link>
          </li>
          <li className="mr-4">
            <button className="btn btn-outline-danger" onClick={handleClick}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
