import React, { memo, useContext } from "react";
import PropTypes from "prop-types";

import "./MoviesCard.scss";
import { BASE_URL } from "../../utils/js/MoviesApi";
import { BASE_URL as API_URL } from "../../utils/js/MainApi";
import { deleteSavedMovie, saveMovie } from "../../utils/js/MainApi";
import formatDuration from "../../utils/js/FormatDuration";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const MoviesCard = ({
  nameRU,
  duration,
  image,
  trailerLink,
  isSavedMovies,
  onSavedMovies,
  movieId,
  savedMovies,
  movies,
}) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const isMovieSaved = savedMovies.some((movie) => movie.movieId == movieId);
  const handleDeleteSavedMovie = async () => {
    try {
      const clickedMovie = savedMovies.find(
        (movie) => movie.movieId == movieId
      );
      const res = await deleteSavedMovie(clickedMovie._id);
      const updatedSavedMovies = savedMovies.filter((movie) => {
        return movie.movieId != res.message.movieId;
      });
      onSavedMovies([...updatedSavedMovies]);
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    }
  };
  const handleSaveMovie = async () => {
    try {
      const clickedMovie = movies.find((movie) => {
        return movie.id == movieId;
      });
      const savedMovie = await saveMovie(clickedMovie);

      const updatedSavedMovies = [...savedMovies, savedMovie];
      onSavedMovies(updatedSavedMovies);
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    }
  };
  const isSaveButtonDisabled = () => {
    return isMovieSaved;
  };

  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <h4 className="movies-card__title">
          <a
            className="movies-card__trailer-link"
            href={trailerLink || `${API_URL}/404`}
            target="_blank"
            rel="noopener noreferrer"
            alt={nameRU}
          >
            {nameRU}
          </a>
        </h4>
        <p className="movies-card__duration">{formatDuration(duration)}</p>
        {isSavedMovies ? (
          <button
            className="movies-card__button movies-card__delete-button"
            type="button"
            alt="Удалить"
            onClick={handleDeleteSavedMovie}
          ></button>
        ) : (
          <button
            className={`movies-card__button movies-card__like-button
          ${isMovieSaved ? "movies-card__like-button_active" : ""}`}
            type="button"
            alt="Сохранить"
            onClick={handleSaveMovie}
            disabled={isSaveButtonDisabled()}
          ></button>
        )}
      </div>
      <img
        className="movies-card__image"
        src={`${BASE_URL}${image?.url}`}
        alt={nameRU}
      ></img>
    </div>
  );
};

MoviesCard.propTypes = {
  nameRU: PropTypes.string.isRequired,
  duration: PropTypes.number,
  image: PropTypes.object,
  trailerLink: PropTypes.string,
  isSavedMovies: PropTypes.bool,
  onSavedMovies: PropTypes.func,
  savedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  movieId: PropTypes.number,
};

export default memo(MoviesCard);
