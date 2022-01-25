import React from "react";
import PropTypes from "prop-types";
import "./MoviesCard.scss";

const MoviesCard = ({ title, duration, image, isLiked, isSavedMovies }) => {
  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <h4 className="movies-card__title">{title}</h4>
        <p className="movies-card__duration">{duration}</p>
        {isSavedMovies ? (
          <button
            className="movies-card__button movies-card__delete-button"
            type="button"
            alt="Удалить"
          ></button>
        ) : (
          <button
            className={`movies-card__button movies-card__like-button
          ${isLiked && "movies-card__like-button_active"}`}
            type="button"
            alt="Сохранить"
          ></button>
        )}
      </div>
      <img className="movies-card__image" src={image} alt={title}></img>
    </div>
  );
};

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  isSavedMovies: PropTypes.bool,
};

export default MoviesCard;
