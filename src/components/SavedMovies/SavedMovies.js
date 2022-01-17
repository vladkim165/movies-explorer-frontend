import React from "react";
import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const SavedMovies = ({ setIsShortMovie, isShortMovie, savedCards }) => {
  return (
    <>
      <div className="movies">
        <SearchForm
          setIsShortMovie={setIsShortMovie}
          isShortMovie={isShortMovie}
        />
        {savedCards ? <MoviesCardList cards={savedCards} /> : <Preloader />}
      </div>
    </>
  );
};

SavedMovies.propTypes = {
  setIsShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  savedCards: PropTypes.array,
};

export default SavedMovies;
