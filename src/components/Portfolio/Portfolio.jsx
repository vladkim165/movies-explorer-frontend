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
            <a
              className="nav__link portfolio__link"
              href="https://vladkim165.github.io/how-to-learn/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Статичный сайт"
            >
              Статичный сайт
              <img className="nav__link-image" src={linkImage}></img>
            </a>
          </li>
          <li className="nav__item portfolio__item">
            <a
              className="nav__link portfolio__link"
              href="https://vladkim165.github.io/russian-travel/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Адаптивный сайт"
            >
              Адаптивный сайт
              <img className="nav__link-image" src={linkImage}></img>
            </a>
          </li>
          <li className="nav__item portfolio__item">
            <a
              className="nav__link portfolio__link"
              href="https://mesto-prod.nomoredomains.rocks/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              alt="Одностраничное приложение"
            >
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
