import React, { memo } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/" />;
};

RequireAuth.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default memo(RequireAuth);
