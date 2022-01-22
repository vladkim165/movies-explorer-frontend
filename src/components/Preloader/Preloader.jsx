import React from "react";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
