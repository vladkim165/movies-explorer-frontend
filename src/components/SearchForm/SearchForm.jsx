import React, { memo } from "react";
import "./SearchForm.scss";
import searchButtonPath from "../../images/search-button.svg";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import validate from "../../utils/js/validate";

const SearchForm = ({ isShortMovie, onShortMovie }) => {
  const handleSearch = () => {
    console.log("Login logic");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSearch,
    validate
  );
  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <div className="search__bar-container">
          <input
            className="search__bar"
            placeholder="Фильм"
            value={values.film || ""}
            onChange={handleChange}
            name="film"
            autoComplete="new-password"
          />
          {errors.film ? (
            <span
              className={`form__field-error ${
                errors.film && "form__field-error_active"
              }`}
            >
              {errors.film}
            </span>
          ) : null}
          <button className="search__bar-button" type="submit">
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
              onChange={() => onShortMovie((isShortMovie) => !isShortMovie)}
            />
            <div className="search__slider"></div>
          </label>
          <span className="search__description">Короткометражки</span>
        </div>
      </form>
    </section>
  );
};

SearchForm.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
};

export default memo(SearchForm);
