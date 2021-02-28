import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { GetStarted } from "../views/GetStarted";
import { Register } from "../views/Register";
import { Login } from "../views/Login";

export const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GetStarted} />
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
};
