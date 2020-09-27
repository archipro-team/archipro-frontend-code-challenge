import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import UserTable from "../pages/userListPage/UserTable";
import UserDetail from "../pages/userDetailPage/UserDetail";

const routes = [
  {
    path: "/users",
    component: UserTable,
    exact: true,
  },
  { path: "/users/detail/:userId", component: UserDetail, exact: true },
];

export default () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          render={(routeProps) =>
            React.createElement(route.component, routeProps)
          }
        />
      ))}

      <Redirect from="/" to="/users" exact={true} />
    </Switch>
  </BrowserRouter>
);
