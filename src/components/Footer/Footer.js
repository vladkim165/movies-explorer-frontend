import React from "react";
import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  if (
    pathname === "/profile" ||
    pathname === "/sign-in" ||
    pathname === "/sign-up"
  )
    return null;
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

export default Footer;
