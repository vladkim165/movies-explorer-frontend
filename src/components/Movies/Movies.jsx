import React, { memo, useState } from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const Movies = ({ onShortMovie, isShortMovie, movies, onMovies }) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className="movies">
        <SearchForm
          onShortMovie={onShortMovie}
          isShortMovie={isShortMovie}
          onMovies={onMovies}
          onSearch={setIsSearching}
        />
        {Array.isArray(movies) ? (
          <MoviesCardList movies={movies} isSavedMovies={false} />
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
};

export default memo(Movies);
