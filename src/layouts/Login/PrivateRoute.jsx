import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";
import indexRoutes from "../../routes/index.jsx";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("accessToken");
  const decoded = jwt.decode(token);
  var currentUserRole = decoded && decoded.role;


  // Lặp qua các đường dẫn để tìm đường dẫn tương ứng với rest.path
  const route = indexRoutes.find((r) => r.path === rest.path);
  if (!token) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />;
  }
  
  // Kiểm tra xem vai trò của người dùng có được phép truy cập trang hay không
  else if (!route || (route.allowedRoles && route.allowedRoles.includes(currentUserRole))) {
    return (
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: currentUserRole === 'admin' ? '/admin/dashboard' : '/pt/',
          state: { from: rest.location },
        }}
      />
    );
  }
};


export default PrivateRoute;
