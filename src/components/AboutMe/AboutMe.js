import React from "react";
import "./AboutMe.scss";
import avatar from "../../images/avatar.jpg";

const AboutMe = () => {
  return (
    <section className="info about-me">
      <div className="info__title-container">
        <h3 className="info__title">Студент</h3>
      </div>
      <div className="about-me__content">
        <div className="about-me__description">
          <h2 className="info__title_big about-me__title">Владислав</h2>
          <h3 className="info__subtitle">Фронтенд-разработчик, 25 лет</h3>
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
          <ul className="nav__list about-me__list">
            <li className="nav__item about-me__item">
              <a className="nav__link">Вконтакте</a>
            </li>
            <li className="nav__item about-me__item">
              <a className="nav__link">Github</a>
            </li>
            <li className="nav__item about-me__item">
              <a className="nav__link">Telegram</a>
            </li>
            <li className="nav__item about-me__item">
              <a className="nav__link">Instagram</a>
            </li>
            <li className="nav__item about-me__item">
              <a className="nav__link">Twitter</a>
            </li>
          </ul>
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

export default AboutMe;
