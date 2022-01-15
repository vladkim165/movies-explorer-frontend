import React from "react";
import "./Portfolio.scss";
import linkImage from "../../images/link.svg";

const Portfolio = () => {
  return (
    <section className="info portfolio">
      <h3 className="info__subtitle portfolio__subtitle">Портфолио</h3>
      <nav className="nav">
        <ul className="nav__list portfolio__list">
          <li className="nav__item portfolio__item">
            <a className="nav__link portfolio__link" href="_blank">
              Статичный сайт
              <img className="nav__link-image" src={linkImage}></img>
            </a>
          </li>
          <li className="nav__item portfolio__item">
            <a className="nav__link portfolio__link" href="_blank">
              Адаптивный сайт
              <img className="nav__link-image" src={linkImage}></img>
            </a>
          </li>
          <li className="nav__item portfolio__item">
            <a className="nav__link portfolio__link" href="_blank">
              Одностраничное приложение
              <img className="nav__link-image" src={linkImage}></img>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
