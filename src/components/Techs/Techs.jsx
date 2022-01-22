import React from "react";
import "./Techs.scss";

const Techs = () => {
  return (
    <section className="techs info">
      <div className="info__title-container">
        <h3 className="info__title">Технологии</h3>
      </div>
      <div>
        <h2 className="info__title_big techs__title">7 технологий</h2>
        <p className="info__text techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                HTML
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                SCSS
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                JS
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                React
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                Git
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                Express
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__button nav__button_big" href="_blank">
                mongoDB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
