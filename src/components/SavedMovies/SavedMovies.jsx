import React, { memo } from "react";
import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const SavedMovies = ({ onShortMovie, isShortMovie, savedCards }) => {
  return (
    <>
      <div className="movies">
        <SearchForm onShortMovie={onShortMovie} isShortMovie={isShortMovie} />
        {savedCards ? <MoviesCardList cards={savedCards} /> : <Preloader />}
      </div>
    </>
  );
};

SavedMovies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  savedCards: PropTypes.array,
};

export default memo(SavedMovies);
