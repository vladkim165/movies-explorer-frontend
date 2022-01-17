import React from "react";
import "./SearchForm.scss";
import searchButtonPath from "../../images/search-button.svg";
import PropTypes from "prop-types";

const SearchForm = ({ isShortMovie, setIsShortMovie }) => {
  return (
    <section className="search">
      <div className="search__bar-container">
        <input className="search__bar" placeholder="Фильм" />
        <button className="search__bar-button">
          <img
            className="search__bar-button-image"
            src={searchButtonPath}
          ></img>
        </button>
      </div>
      <div className="search__switch-container">
        <label className="search__switch">
          <input
            type="checkbox"
            checked={isShortMovie}
            onChange={(isShortMovie) => setIsShortMovie(isShortMovie)}
          />
          <div className="search__slider"></div>
        </label>
        <span className="search__description">Короткометражки</span>
      </div>
    </section>
  );
};

SearchForm.propTypes = {
  setIsShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
};

export default SearchForm;
