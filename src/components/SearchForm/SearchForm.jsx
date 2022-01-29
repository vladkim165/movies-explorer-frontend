import React, { memo, useContext } from "react";
import "./SearchForm.scss";
import searchButtonPath from "../../images/search-button.svg";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import validate from "../../utils/js/Validate";
import { getMovies } from "../../utils/js/MoviesApi";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const SearchForm = ({ isShortMovie, onShortMovie, onMovies, onSearch }) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const isButtonDisabled = () => errors.film;
  const handleSearch = async () => {
    try {
      onSearch(true);
      const movies = await getMovies();
      localStorage.setItem("movies", JSON.stringify(movies));
      onMovies(movies);
    } catch (err) {
      onSearch(false);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    }
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
          <button
            className="search__bar-button"
            type="submit"
            disabled={isButtonDisabled()}
          >
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
  onMovies: PropTypes.func,
  onSearch: PropTypes.func,
};

export default memo(SearchForm);
