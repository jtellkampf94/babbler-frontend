import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ user, component: Component, path, ...restProps }) => {
  return (
    <React.Fragment>
      <Route
        path={path}
        {...restProps}
        render={props =>
          user._id ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </React.Fragment>
  );
};

export default ProtectedRoute;
