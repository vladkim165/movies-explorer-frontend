import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logoPath from "../../images/logo.svg";
import "./Header.scss";

const Header = ({ signup, signin }) => (
  <header className="header">
    <img className="header__logo" src={logoPath} alt="Логотип" />
    <div className="header__button-container">
      <Link to={signup} className="header__button header__signup-button">
        Регистрация
      </Link>
      <Link to={signin} className="header__button header__signin-button">
        Войти
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  signup: PropTypes.string.isRequired,
  signin: PropTypes.string.isRequired,
};

export default Header;
