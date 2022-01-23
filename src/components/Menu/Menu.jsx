import React, { memo } from "react";
import "./Menu.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

const Menu = ({ isSideMenuOpen, onSideMenu, profilePath }) => {
  const { ref } = useOutsideClick(isSideMenuOpen, onSideMenu);
  return (
    <nav className={`menu ${isSideMenuOpen && "menu_active"}`} ref={ref}>
      <button
        className="menu__button menu__close-button"
        type="button"
        alt="Закрыть"
        onClick={() => onSideMenu(false)}
      ></button>
      <ul className="menu__list">
        <li>
          <a className="menu__item menu__button" alt="Главная">
            Главная
          </a>
        </li>
        <li>
          <a className="menu__item menu__button" alt="Фильмы">
            Фильмы
          </a>
        </li>
        <li>
          <a className="menu__item menu__button" alt="Сохраненные фильмы">
            Сохраненные фильмы
          </a>
        </li>
        <li>
          <button
            className="menu__account-button menu__button"
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
  );
};

Menu.propTypes = {
  isSideMenuOpen: PropTypes.bool.isRequired,
  profilePath: PropTypes.string.isRequired,
  onSideMenu: PropTypes.func,
};

export default memo(Menu);
