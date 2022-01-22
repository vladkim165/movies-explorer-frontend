import React, { memo } from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const Movies = ({ onShortMovie, isShortMovie, cards }) => {
  return (
    <>
      <div className="movies">
        <SearchForm onShortMovie={onShortMovie} isShortMovie={isShortMovie} />
        {cards ? <MoviesCardList cards={cards} /> : <Preloader />}
      </div>
    </>
  );
};

Movies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  cards: PropTypes.array,
};

export default memo(Movies);
