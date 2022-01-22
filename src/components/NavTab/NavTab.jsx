import React from "react";
import "./NavTab.scss";
// import PropTypes from "prop-types";

const NavTab = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__button nav__button_big" href="_blank">
            О проекте
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__button nav__button_big" href="_blank">
            Технологии
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__button nav__button_big" href="_blank">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
