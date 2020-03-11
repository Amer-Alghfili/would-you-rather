import React from "react";
import { Redirect } from "react-router-dom";
export default (WrappedComponent, authed) => {
  return props => {
    if (!authed) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { target: props.location.pathname }
          }}
        />
      );
    }
    return <WrappedComponent {...props}/>;
  };
};
