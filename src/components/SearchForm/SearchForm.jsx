import React, { memo, useContext, useState, useEffect } from "react";
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
  movies,
  savedMovies,
}) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const [isButtonDisabled, setisButtonDisabled] = useState(false);

  const handleSearch = async () => {
    try {
      if (values.film && !isSavedMovies) {
        localStorage.setItem("inputValue", values.film);
      } else if (!values.film && !isSavedMovies) {
        localStorage.setItem("inputValue", "");
      }

      const appropriateArrayOfMovies = isSavedMovies ? savedMovies : movies;
      // fiters appropriate array using users input
      if (matchedMovies && appropriateArrayOfMovies) {
        const filteredBySearchInput = appropriateArrayOfMovies.filter(
          (movie) => {
            if (movie.nameRU && values.film) {
              return movie.nameRU
                .toLowerCase()
                .includes(values.film.toLowerCase());
            }
            if (movie.nameEN && values.film) {
              return movie.nameEN
                .toLowerCase()
                .includes(values.film.toLowerCase());
            }
            return true;
          }
        );
        // need this values be storaged for slider
        const appropriateStorageItemByChars = !isSavedMovies
          ? "matchedByCharsMovies"
          : "matchedByCharsSavedMovies";
        localStorage.setItem(
          appropriateStorageItemByChars,
          JSON.stringify(filteredBySearchInput)
        );
        const filteredByInputAndDuration = filteredBySearchInput.filter(
          (movie) => {
            return isShortMovie ? movie.duration <= 40 : movie.duration > 40;
          }
        );

        // if it's movies page save the result of search
        if (!isSavedMovies) {
          localStorage.setItem(
            "matchedSearchedMovies",
            JSON.stringify(filteredByInputAndDuration)
          );
        }

        onMatchedMovies(filteredByInputAndDuration);
      }
      // fires only on on initial all movies request, gets initial array of movies and stores it in local storage
      else if (!appropriateArrayOfMovies && !isSavedMovies) {
        onSearch(true);
        setisButtonDisabled(true);
        const moviesFromServer = await getMovies();

        moviesFromServer.forEach((movie) => {
          movie.nameRU = movie?.nameRU || "No info";
          movie.nameEN = movie?.nameEN || "No info";
          movie.duration = movie?.duration || 0;
          movie.image = movie?.image || null;
          movie.trailerLink = movie?.trailerLink || movie?.trailer || "No info";
          movie.movieId = movie?.id || movie?.movieId || 0;
          movie.country = movie?.country || "No info";
        });

        localStorage.setItem("movies", JSON.stringify(moviesFromServer));

        const filteredBySearchInput = moviesFromServer.filter((movie) => {
          if (movie.nameRU && values.film) {
            return movie.nameRU
              .toLowerCase()
              .includes(values.film.toLowerCase());
          }
          if (movie.nameEN && values.film) {
            return movie.nameEN
              .toLowerCase()
              .includes(values.film.toLowerCase());
          }
          return true;
        });

        const filteredByInputAndDuration = filteredBySearchInput.filter(
          (movie) => {
            return isShortMovie ? movie.duration <= 40 : movie.duration > 40;
          }
        );

        localStorage.setItem(
          "matchedByCharsMovies",
          JSON.stringify(filteredBySearchInput)
        );

        onMovies(filteredByInputAndDuration);
      }
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    } finally {
      if (!isSavedMovies) {
        onSearch(false);
      }
      setisButtonDisabled(false);
    }
  };

  const handleSetIsShortMovies = () => {
    onShortMovie((prevState) => !prevState);
  };

  // listens to the change of short movies slider
  useEffect(() => {
    try {
      const appropriateStorageItem = !isSavedMovies
        ? "matchedByCharsMovies"
        : "matchedByCharsSavedMovies";
      if (matchedMovies && localStorage.getItem(appropriateStorageItem)) {
        const appropriateArrayOfMovies = JSON.parse(
          localStorage.getItem(appropriateStorageItem)
        );
        const updatedMatchedMovies = appropriateArrayOfMovies.filter(
          (movie) => {
            return isShortMovie ? movie.duration <= 40 : movie.duration > 40;
          }
        );
        onMatchedMovies(updatedMatchedMovies);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isShortMovie, movies, savedMovies]);

  const initialValue = isSavedMovies
    ? {}
    : { film: localStorage.getItem("inputValue") };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSearch,
    "handleSearch",
    validate,
    initialValue
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
            disabled={isButtonDisabled}
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
              onChange={handleSetIsShortMovies}
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
  savedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default memo(SearchForm);
