import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logoPath from "../../images/logo.svg";
import "./Header.scss";
import { useLocation } from "react-router-dom";

const Header = ({
  signupPath,
  signinPath,
  allMoviesPath,
  savedMoviesPath,
  profilePath,
  isLoggedIn,
  isNotFoundPage,
}) => {
  const { pathname } = useLocation();
  if (pathname === signinPath || pathname === signupPath || isNotFoundPage)
    return null;
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип" />
      {isLoggedIn && (
        <div className="header__links-container">
          <Link className="header__link" to={allMoviesPath}>
            Фильмы
          </Link>
          <Link className="header__link" to={savedMoviesPath}>
            Сохранённые фильмы
          </Link>
          <Link
            className="header__link header__account-button"
            to={profilePath}
          >
            Аккаунт
          </Link>
        </div>
      )}
      {!isLoggedIn && (
        <div className="header__button-container">
          <Link
            to={signupPath}
            className="header__button header__signup-button"
          >
            Регистрация
          </Link>
          <Link
            to={signinPath}
            className="header__button header__signin-button"
          >
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  signupPath: PropTypes.string.isRequired,
  signinPath: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  allMoviesPath: PropTypes.string.isRequired,
  savedMoviesPath: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
  isNotFoundPage: PropTypes.bool,
};

export default memo(Header);
