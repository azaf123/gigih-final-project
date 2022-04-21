/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.token.accesstoken);
  useEffect(() => {
    console.log("token", token);
  }, [token]);
  //   const token = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        return (token ? <Component {...props} /> : (
          <Redirect to={{
            pathname: "/",
            state: { from: props.location },
          }}
          />
        ));
      }}
    />

  );
};

export default PrivateRoute;
