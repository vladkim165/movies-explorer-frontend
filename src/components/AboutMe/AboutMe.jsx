import React, { memo } from "react";
import "./AboutMe.scss";
import PropTypes from "prop-types";
import avatar from "../../images/avatar.jpg";

const AboutMe = ({ aboutMeRef }) => {
  return (
    <section className="info about-me" ref={aboutMeRef}>
      <div className="info__title-container">
        <h3 className="info__title">Студент</h3>
      </div>
      <div className="about-me__content">
        <div className="about-me__description">
          <h2 className="info__title info__title_big about-me__title">
            Владислав
          </h2>
          <h3 className="info__subtitle about-me__subtitle">
            Фронтенд-разработчик, 25 лет
          </h3>
          <p className="info__text about-me__text">
            Я живу в Ростове-на-Дону, закончил факультет экономики РАНХиГС.
            <br></br>
            Всегда искал что-то своё, попробовав веб-разработку понял, что это
            моё. Хочу развиваться в веб разработке, приносить пользу команде.
            Умею хорошо воплощать замыслы дизайнеров в жизнь. Закончил курсы в
            Яндекс.Практикум по направлению Веб-разработчик. Постоянно читаю
            статьи, читаю книги, изучаю алгоритмы. Очень хочу попасть в
            IT-компанию для получения опыта и знаний для дальнейшего роста в
            веб-разработке. Взамен я предлагаю полную компетентность, быть
            старательным и дружелюбным к вашей команде.
          </p>
          <nav className="nav about-me__nav">
            <ul className="nav__list about-me__list">
              <li className="nav__item about-me__item">
                <a
                  className="nav__link"
                  href="https://vk.com/vladkim165"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Вконтакте"
                >
                  Вконтакте
                </a>
              </li>
              <li className="nav__item about-me__item">
                <a
                  className="nav__link"
                  href="https://github.com/vladkim165"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Github"
                >
                  Github
                </a>
              </li>
              <li className="nav__item about-me__item">
                <a
                  className="nav__link"
                  href="https://t.me/vladkim165"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Telegram"
                >
                  Telegram
                </a>
              </li>
              <li className="nav__item about-me__item">
                <a
                  className="nav__link"
                  href="https://www.instagram.com/hatedxx1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li className="nav__item about-me__item">
                <a
                  className="nav__link"
                  href="https://career.habr.com/vladkim165"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Хабр Карьера"
                >
                  Хабр Карьера
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img
          className="about-me__avatar"
          src={avatar}
          alt="Аватар профиля"
        ></img>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  aboutMeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default memo(AboutMe);
