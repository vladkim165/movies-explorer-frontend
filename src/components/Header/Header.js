import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logoPath from "../../images/logo.svg";
import "./Header.scss";
import { useLocation } from "react-router-dom";

const Header = ({
  signup,
  signin,
  isLoggedIn,
  allFilmsPath,
  savedFilmsPath,
  accountPath,
}) => {
  const { pathname } = useLocation();
  if (pathname === "/sign-in" || pathname === "/sign-up") return null;
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип" />
      {isLoggedIn && (
        <div className="header__links-container">
          <Link className="header__link" to={allFilmsPath}>
            Фильмы
          </Link>
          <Link className="header__link" to={savedFilmsPath}>
            Сохранённые фильмы
          </Link>
          <Link
            className="header__link header__account-button"
            to={accountPath}
          >
            Аккаунт
          </Link>
        </div>
      )}
      {!isLoggedIn && (
        <div className="header__button-container">
          <Link to={signup} className="header__button header__signup-button">
            Регистрация
          </Link>
          <Link to={signin} className="header__button header__signin-button">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  signup: PropTypes.string.isRequired,
  signin: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  allFilmsPath: PropTypes.string.isRequired,
  savedFilmsPath: PropTypes.string.isRequired,
  accountPath: PropTypes.string.isRequired,
};

export default Header;
