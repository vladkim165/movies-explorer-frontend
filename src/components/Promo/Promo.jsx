import React from "react";
// import PropTypes from "prop-types";
import NavTab from "../NavTab/NavTab";
import "./Promo.scss";

const Promo = () => {
  return (
    <section className="info promo">
      <h2 className="info__title_big promo__title">
        Учебный проект студента
        <br></br>
        факультета Веб-разработки.
      </h2>
      <NavTab />
    </section>
  );
};

export default Promo;
