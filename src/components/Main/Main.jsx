import React, { memo } from "react";
import Promo from "../Promo/Promo";
import PropTypes from "prop-types";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

const Main = ({ aboutProjectRef, techsRef, aboutMeRef }) => {
  return (
    <main>
      <Promo
        aboutProjectRef={aboutProjectRef}
        techsRef={techsRef}
        aboutMeRef={aboutMeRef}
      />
      <AboutProject aboutProjectRef={aboutProjectRef} />
      <Techs techsRef={techsRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Portfolio />
    </main>
  );
};

Main.propTypes = {
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

export default memo(Main);
