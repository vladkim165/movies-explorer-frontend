import React, { memo } from "react";
import PropTypes from "prop-types";
import NavTab from "../NavTab/NavTab";
import "./Promo.scss";

const Promo = ({ aboutProjectRef, techsRef, aboutMeRef }) => {
  return (
    <section className="info promo">
      <h2 className="info__title_big promo__title">
        Учебный проект студента
        <br></br>
        факультета Веб-разработки.
      </h2>
      <NavTab
        aboutProjectRef={aboutProjectRef}
        techsRef={techsRef}
        aboutMeRef={aboutMeRef}
      />
    </section>
  );
};

Promo.propTypes = {
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

export default memo(Promo);
