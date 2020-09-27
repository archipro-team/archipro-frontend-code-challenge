import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import UserTable from "../pages/userListPage/UserTable";

const routes = [
  {
    path: "/users",
    component: UserTable,
    exact: true,
  },
];

export default () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          <UserTable />
        </Route>
      ))}

      <Redirect from="/" to="/users" exact={true} />
    </Switch>
  </BrowserRouter>
);
