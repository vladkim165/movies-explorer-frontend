import React, { memo } from "react";
import "./Techs.scss";
import PropTypes from "prop-types";

const Techs = ({ techsRef }) => {
  return (
    <section className="techs info" ref={techsRef}>
      <div className="info__title-container techs__title-container">
        <h3 className="info__title">Технологии</h3>
      </div>
      <div>
        <h2 className="info__title info__title_big techs__title">
          7 технологий
        </h2>
        <p className="info__text techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noopener noreferrer"
                alt="HTML"
              >
                HTML
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="SCSS"
              >
                SCSS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://www.javascript.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="JavaScript"
              >
                JS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                alt="React"
              >
                React
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Git"
              >
                Git
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Express"
              >
                Express
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__button nav__button_big"
                href="https://www.mongodb.com"
                target="_blank"
                rel="noopener noreferrer"
                alt="mongoDB"
              >
                mongoDB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Techs.propTypes = {
  techsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default memo(Techs);
