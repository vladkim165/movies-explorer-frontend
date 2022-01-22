import React, { memo } from "react";
import "./NavTab.scss";
import PropTypes from "prop-types";

const scrollTo = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavTab = ({ aboutProjectRef, techsRef, aboutMeRef }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button
            className="nav__button"
            href="_blank"
            type="button"
            onClick={() => {
              scrollTo(aboutProjectRef);
            }}
          >
            О проекте
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__button"
            href="_blank"
            type="button"
            onClick={() => {
              scrollTo(techsRef);
            }}
          >
            Технологии
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__button"
            href="_blank"
            type="button"
            onClick={() => {
              scrollTo(aboutMeRef);
            }}
          >
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
};

NavTab.propTypes = {
  aboutProjectRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  techsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  aboutMeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default memo(NavTab);
