import React, { memo, useContext } from "react";
import "./SearchForm.scss";
import searchButtonPath from "../../images/search-button.svg";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import validate from "../../utils/js/validate";
import { getMovies } from "../../utils/js/MoviesApi";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const SearchForm = ({
  isShortMovie,
  onShortMovie,
  onSearch,
  isSavedMovies,
  onMovies,
  matchedMovies,
  onMatchedMovies,
}) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const isButtonDisabled = () => errors.film;

  const handleSearch = async () => {
    try {
      if (matchedMovies) {
        const updatedMatchedMovies = matchedMovies.filter((movie) => {
          if (movie.nameRU) return movie.nameRU.includes(values.film);
          if (movie.nameEN) return movie.nameEN.includes(values.film);
        });
        onMatchedMovies(updatedMatchedMovies);
      }
      // fires only on on initial all movies request
      else if (!matchedMovies && !isSavedMovies) {
        onSearch(true);
        const moviesFromServer = await getMovies();
        localStorage.setItem("movies", JSON.stringify(moviesFromServer));
        onMovies(moviesFromServer);
      }
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    } finally {
      onSearch(false);
    }
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSearch,
    "handleSearch",
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
          <span
            className={`form__field-error ${
              errors.film ? "form__field-error_active" : ""
            }`}
          >
            {errors.film}
          </span>
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
  onSearch: PropTypes.func,
  isSavedMovies: PropTypes.bool,
  matchedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onMatchedMovies: PropTypes.func,
  onMovies: PropTypes.func,
};

export default memo(SearchForm);
