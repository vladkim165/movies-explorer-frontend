import React, { memo } from "react";
import "./AboutProject.scss";
import PropTypes from "prop-types";

const AboutProject = ({ aboutProjectRef }) => {
  return (
    <section className="info about-project" ref={aboutProjectRef}>
      <div className="info__title-container">
        <h3 className="info__title">О проекте</h3>
      </div>
      <div className="info__item-list about-project__info">
        <div className="info__item-container about-project__info-item">
          <h4 className="info__subtitle about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="info__text about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="info__item-container about-project__info-item">
          <h4 className="info__subtitle about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="info__text about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="bar info__bar">
        <div className="bar__item-container bar__item-container_first">
          <p className="info__text bar__section bar__section_first">1 неделя</p>
          <p className="info__text bar__sub-text">Back-end</p>
        </div>
        <div className="bar__item-container bar__item-container_second">
          <p className="info__text bar__section bar__section_second">
            4 недели
          </p>
          <p className="info__text bar__sub-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

AboutProject.propTypes = {
  aboutProjectRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default memo(AboutProject);
