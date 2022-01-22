import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = ({ signupPath, signinPath, profilePath, isNotFoundPage }) => {
  const { pathname } = useLocation();
  if (
    pathname === signupPath ||
    pathname === signinPath ||
    pathname === profilePath ||
    isNotFoundPage
  ) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer__description-container">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__refs">
        <p className="footer__copyright">&copy; 2021</p>
        <div>
          <a className="footer__link" href="_blank">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="_blank">
            Github
          </a>
          <a className="footer__link" href="_blank">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  signupPath: PropTypes.string.isRequired,
  signinPath: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
  isNotFoundPage: PropTypes.bool,
};

export default memo(Footer);
