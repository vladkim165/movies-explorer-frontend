import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate replace to="/signin" />;
};

RequireAuth.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RequireAuth;
