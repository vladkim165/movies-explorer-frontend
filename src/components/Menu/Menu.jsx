import React, { memo } from "react";
import "./Menu.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ isSideMenuOpen, profilePath, onSideMenu }) => {
  return (
    <section className={`popup ${isSideMenuOpen && "popup_active"}`}>
      <nav className={`menu ${isSideMenuOpen && "menu_active"}`}>
        <button
          className="menu__close-button"
          type="button"
          alt="Закрыть"
          onClick={() => onSideMenu(false)}
        ></button>
        <ul className="menu__list">
          <li>
            <a className="menu__item" alt="Главная">
              Главная
            </a>
          </li>
          <li>
            <a className="menu__item" alt="Фильмы">
              Фильмы
            </a>
          </li>
          <li>
            <a className="menu__item" alt="Сохраненные фильмы">
              Сохраненные фильмы
            </a>
          </li>
          <li>
            <button
              className="menu__account-button"
              alt="Аккаунт"
              type="button"
            >
              <Link className="menu__link" to={profilePath} alt="Аккаунт">
                Аккаунт
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

Menu.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  profilePath: PropTypes.string.isRequired,
  onSideMenu: PropTypes.func,
};

export default memo(Menu);
