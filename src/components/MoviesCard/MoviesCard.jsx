import React from "react";
import PropTypes from "prop-types";
import "./MoviesCard.scss";

const MoviesCard = ({ title, duration, image, isLiked }) => {
  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <h4 className="movies-card__title">{title}</h4>
        <p className="movies-card__duration">{duration}</p>
        <button
          className={`movies-card__like
          ${isLiked && "movies-card__like_active"}`}
        ></button>
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
};

export default MoviesCard;
