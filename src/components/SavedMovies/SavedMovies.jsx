import React, { memo, useEffect, useState } from "react";
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
  const [matchedSavedMovies, setMatchedSavedMovies] = useState(savedMovies);

  useEffect(() => {
    localStorage.setItem(
      "matchedByCharsSavedMovies",
      JSON.stringify(savedMovies)
    );

    const filteredByDurationSavedMovies = savedMovies.filter((movie) => {
      if (isShortMovie) {
        return movie.duration <= 40;
      } else {
        return movie.duration > 40;
      }
    });
    setMatchedSavedMovies(filteredByDurationSavedMovies);
  }, []);

  return (
    <>
      <div className="movies">
        <SearchForm
          onShortMovie={onShortMovie}
          isShortMovie={isShortMovie}
          isSavedMovies={isSavedMovies}
          onMovies={onSavedMovies}
          matchedMovies={matchedSavedMovies}
          onMatchedMovies={setMatchedSavedMovies}
          movies={movies}
          savedMovies={savedMovies}
        />
        {savedMovies ? (
          <MoviesCardList
            movies={movies}
            isSavedMovies={isSavedMovies}
            onSavedMovies={onSavedMovies}
            savedMovies={savedMovies}
            isShortMovie={isShortMovie}
            matchedMovies={matchedSavedMovies}
            onMatchedMovies={setMatchedSavedMovies}
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
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isSavedMovies: PropTypes.bool,
  onSavedMovies: PropTypes.func,
};

export default memo(SavedMovies);
