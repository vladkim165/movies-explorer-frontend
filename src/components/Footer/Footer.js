import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__description-container">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__refs">
        <p className="footer__copyright">&copy; 2021</p>
        <div className="footer__links">
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
