import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./variables/Firebase.js";
import "bootstrap/dist/css/bootstrap.css";
/*import 'font-awesome/css/font-awesome.min.css';*/
import "assets/scss/zest-admin.css";
import "assets/fonts/simple-line-icons.css";
import PrivateRoute from "./layouts/Login/PrivateRoute.jsx";
import indexRoutes from "routes/index.jsx";
const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        if (prop.path === "/login" || prop.path === "/") {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        }
        return (
          <PrivateRoute
            path={prop.path}
            key={key}
            component={prop.component}
            allowedRoles={['admin', 'pt', 'user']}
          />
      
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
