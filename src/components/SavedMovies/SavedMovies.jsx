import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const SavedMovies = ({
  onShortMovie,
  isShortMovie,
  savedMovies,
  isSavedMovies,
  onSavedMovies,
  movies,
}) => {
  const [matchedMovies, setMatchedMovies] = useState(savedMovies);
  return (
    <>
      <div className="movies">
        <SearchForm
          onShortMovie={onShortMovie}
          isShortMovie={isShortMovie}
          isSavedMovies={isSavedMovies}
          onMovies={onSavedMovies}
          matchedMovies={matchedMovies}
          onMatchedMovies={setMatchedMovies}
        />
        {savedMovies ? (
          <MoviesCardList
            movies={movies}
            isSavedMovies={isSavedMovies}
            onSavedMovies={onSavedMovies}
            savedMovies={savedMovies}
            isShortMovie={isShortMovie}
            matchedMovies={matchedMovies}
            onMatchedMovies={setMatchedMovies}
          />
        ) : (
          <Preloader />
        )}
      </div>
    </>
  );
};

SavedMovies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  savedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isSavedMovies: PropTypes.bool,
  onSavedMovies: PropTypes.func,
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default memo(SavedMovies);
