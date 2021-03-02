import React from "react";
import { useSelector } from "react-redux";

import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import "./App.css";

export const App = () => {

  const { auth } = useSelector(state => state.auth);

  return (auth) ? <PrivateRoutes /> : <PublicRoutes />;
};
