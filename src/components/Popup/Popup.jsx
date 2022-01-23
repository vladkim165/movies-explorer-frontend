import React, { memo } from "react";
import "./Popup.scss";
import PropTypes from "prop-types";

const Popup = ({ children, isSideMenuOpen, isInfoMessage }) => {
  const isPopupOpen = isSideMenuOpen || isInfoMessage;

  return (
    <section className={`popup ${isPopupOpen && "popup_active"}`}>
      {children}
    </section>
  );
};

Popup.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  isInfoMessage: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(Popup);
