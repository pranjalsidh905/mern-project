import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router";

const PrivateRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  //   const navigate = useNavigate();

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navigate to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default PrivateRoute;
