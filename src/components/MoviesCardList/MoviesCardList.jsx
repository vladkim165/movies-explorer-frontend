import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MoviesCardList = ({
  movies,
  isSavedMovies,
  onSavedMovies,
  savedMovies,
  isShortMovie,
  matchedMovies,
  onMatchedMovies,
}) => {
  // listens to the user's vh and vw
  const { width } = useWindowDimensions();
  const initialDisplayedCards = () => {
    return width < 650 ? 5 : 7;
  };
  const [displayedCards, setDisplayedCards] = React.useState(0);

  // get initial amount of displayed cards
  useEffect(() => {
    if (isSavedMovies) {
      setDisplayedCards(savedMovies.length);
    } else {
      setDisplayedCards(initialDisplayedCards());
    }
  }, []);

  const handleChangeDisplayedCards = () => {
    width < 650
      ? setDisplayedCards((prevState) => prevState + 5)
      : setDisplayedCards((prevState) => prevState + 7);
  };

  // filters card array depending on short movie state
  useEffect(() => {
    try {
      if (isShortMovie && matchedMovies) {
        const updatedMatchedMovies = matchedMovies.filter(
          (movie) => movie.duration <= 40
        );
        onMatchedMovies(updatedMatchedMovies);
      } else {
        const appropriateArrayOfMovies = isSavedMovies ? savedMovies : movies;
        onMatchedMovies(appropriateArrayOfMovies);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isShortMovie, movies, savedMovies]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {Array.isArray(matchedMovies) &&
          matchedMovies.slice(0, displayedCards).map((card) => {
            return (
              <MoviesCard
                key={card.id}
                nameRU={card.nameRU}
                nameEN={card.nameEN}
                duration={card.duration}
                image={card.image}
                trailerLink={card?.trailerLink || card?.trailer}
                isSavedMovies={isSavedMovies}
                onSavedMovies={onSavedMovies}
                movies={movies}
                savedMovies={savedMovies}
                movieId={card?.id || card?.movieId}
              />
            );
          })}
      </ul>
      {!isSavedMovies && displayedCards < matchedMovies?.length ? (
        <button
          className="movies-card-list__more-button"
          onClick={handleChangeDisplayedCards}
        >
          Ещё
        </button>
      ) : null}
    </section>
  );
};

MoviesCardList.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isSavedMovies: PropTypes.bool,
  onSavedMovies: PropTypes.func,
  savedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isShortMovie: PropTypes.bool,
  matchedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onMatchedMovies: PropTypes.func,
};

export default memo(MoviesCardList);
