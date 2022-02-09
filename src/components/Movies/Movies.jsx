import React, { memo, useState } from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const Movies = ({
  onShortMovie,
  isShortMovie,
  movies,
  onMovies,
  savedMovies,
  onSavedMovies,
  isSavedMovies,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [matchedMovies, setMatchedMovies] = useState(movies);

  return (
    <>
      <div className="movies">
        <SearchForm
          onShortMovie={onShortMovie}
          isShortMovie={isShortMovie}
          onMovies={onMovies}
          onSearch={setIsSearching}
          isSavedMovies={isSavedMovies}
          matchedMovies={matchedMovies}
          onMatchedMovies={setMatchedMovies}
        />
        {Array.isArray(movies) ? (
          <MoviesCardList
            movies={movies}
            isSavedMovies={isSavedMovies}
            savedMovies={savedMovies}
            onSavedMovies={onSavedMovies}
            isShortMovie={isShortMovie}
            matchedMovies={matchedMovies}
            onMatchedMovies={setMatchedMovies}
          />
        ) : isSearching ? (
          <Preloader />
        ) : null}
      </div>
    </>
  );
};

Movies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onMovies: PropTypes.func,
  savedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onSavedMovies: PropTypes.func,
  isSavedMovies: PropTypes.bool,
};

export default memo(Movies);
