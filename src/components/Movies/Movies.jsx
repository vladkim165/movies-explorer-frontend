import React, { memo } from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const Movies = ({ onShortMovie, isShortMovie, movies }) => {
  return (
    <>
      <div className="movies">
        <SearchForm onShortMovie={onShortMovie} isShortMovie={isShortMovie} />
        {movies ? <MoviesCardList movies={movies} /> : <Preloader />}
      </div>
    </>
  );
};

Movies.propTypes = {
  onShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  movies: PropTypes.array,
};

export default memo(Movies);
