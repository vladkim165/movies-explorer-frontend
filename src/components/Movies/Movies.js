import React from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

const Movies = ({ setIsShortMovie, isShortMovie, cards }) => {
  return (
    <>
      <div className="movies">
        <SearchForm
          setIsShortMovie={setIsShortMovie}
          isShortMovie={isShortMovie}
        />
        {cards ? <MoviesCardList cards={cards} /> : <Preloader />}
      </div>
    </>
  );
};

Movies.propTypes = {
  setIsShortMovie: PropTypes.func,
  isShortMovie: PropTypes.bool,
  cards: PropTypes.array,
};

export default Movies;
