import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./Content.module.css";

const Dashboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"));
const Users = React.lazy(() => import("../../pages/Users"));

const Content = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} name="Dashboard" component={Dashboard} />
        <Route path="/users" exact={true} name="Users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
};
export default Content;
