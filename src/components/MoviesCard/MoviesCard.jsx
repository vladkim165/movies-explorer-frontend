import React from "react";
import PropTypes from "prop-types";
import "./MoviesCard.scss";
import { BASE_URL } from "../../utils/js/MoviesApi";
import formatDuration from "../../utils/js/FormatDuration";

const MoviesCard = ({
  nameRU,
  duration,
  image,
  trailerLink,
  isSavedMovies,
}) => {
  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <h4 className="movies-card__title">
          <a
            className="movies-card__trailer-link"
            href={trailerLink || "http://localhost:3000/404"}
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
          ></button>
        ) : (
          <button
            className={`movies-card__button movies-card__like-button
          ${"movies-card__like-button_active"}`}
            type="button"
            alt="Сохранить"
          ></button>
        )}
      </div>
      <img
        className="movies-card__image"
        src={`${BASE_URL}${image.url}`}
        alt={nameRU}
      ></img>
    </div>
  );
};

MoviesCard.propTypes = {
  nameRU: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  trailerLink: PropTypes.string,
  isSavedMovies: PropTypes.bool,
};

export default MoviesCard;
