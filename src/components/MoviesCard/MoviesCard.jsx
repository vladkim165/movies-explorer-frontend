import React, { memo, useContext, useState } from "react";
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
  matchedMovies,
  onMatchedMovies,
}) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const isMovieSaved = savedMovies.some((movie) => movie.movieId == movieId);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleDeleteSavedMovie = async () => {
    try {
      const clickedMovie = savedMovies.find(
        (movie) => movie.movieId == movieId
      );
      setIsButtonDisabled(true);
      const res = await deleteSavedMovie(clickedMovie._id);
      const updatedSavedMovies = savedMovies.filter((movie) => {
        return movie.movieId != res.message.movieId;
      });
      const updatedMatchedMovies = matchedMovies.filter((movie) => {
        return movie.movieId != res.message.movieId;
      });
      const currentMatchedByCharsStorageMovies = JSON.parse(
        localStorage.getItem("matchedByCharsSavedMovies")
      ).filter((movie) => {
        return movie.movieId != res.message.movieId;
      });
      localStorage.setItem(
        "matchedByCharsSavedMovies",
        JSON.stringify(currentMatchedByCharsStorageMovies)
      );

      onSavedMovies(updatedSavedMovies);
      onMatchedMovies(updatedMatchedMovies);
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    } finally {
      setIsButtonDisabled(false);
    }
  };
  const handleSaveMovie = async () => {
    try {
      const clickedMovie = movies.find((movie) => {
        return movie.id == movieId;
      });
      setIsButtonDisabled(true);
      const savedMovie = await saveMovie(clickedMovie);

      const updatedSavedMovies = [...savedMovies, savedMovie];
      const updatedMatchedMovies = [...matchedMovies, savedMovie];
      onSavedMovies(updatedSavedMovies);
      onMatchedMovies(updatedMatchedMovies);
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        success: false,
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
      });
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const handleLikeOrUnlike = () => {
    try {
      if (isMovieSaved) {
        handleDeleteSavedMovie();
      } else if (!isMovieSaved) {
        handleSaveMovie();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <h4 className="movies-card__title movies-card__trailer-link">
          {nameRU}
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
            onClick={handleLikeOrUnlike}
            disabled={isButtonDisabled}
          ></button>
        )}
      </div>
      <a
        className="movies-card__redirect-link"
        href={trailerLink || `${API_URL}/404`}
        target="_blank"
        rel="noopener noreferrer"
        alt={nameRU}
      >
        <img
          className="movies-card__image"
          src={`${BASE_URL}${image?.url}`}
          alt={nameRU}
        ></img>
      </a>
    </li>
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
  matchedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onMatchedMovies: PropTypes.func,
};

export default memo(MoviesCard);
