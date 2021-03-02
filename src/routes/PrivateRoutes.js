import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Dashboard } from "../views/Dashboard";
import { Operations } from "../views/Operations";
import { Edit } from "../views/Edit";

export const PrivateRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/operations" component={Operations} />
          <Route path="/edit" component={Edit} />
          <Redirect exact to="/dashboard" />
        </Switch>
      </Router>
    </>
  );
};
