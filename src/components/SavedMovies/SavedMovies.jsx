import React, { memo } from "react";
import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const SavedMovies = ({ onShortMovie, isShortMovie, savedMovies }) => {
  return (
    <>
      <div className="movies">
        <SearchForm onShortMovie={onShortMovie} isShortMovie={isShortMovie} />
        {savedMovies ? <MoviesCardList movies={savedMovies} /> : <Preloader />}
      </div>
    </>
  );
};

SavedMovies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  savedMovies: PropTypes.array,
};

export default memo(SavedMovies);
