import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = UseAuth();
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
