import React, { memo, useEffect } from "react";
import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import PropTypes from "prop-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MoviesCardList = ({ movies, isSavedMovies }) => {
  // listens to the user's vh and vw
  const { width } = useWindowDimensions();
  const initialDisplayedCards = () => {
    return width < 650 ? 5 : 7;
  };
  const [displayedCards, setDisplayedCards] = React.useState(0);

  useEffect(() => {
    setDisplayedCards(initialDisplayedCards());
  }, []);

  const handleChangeDisplayedCards = () => {
    width < 650
      ? setDisplayedCards((prevState) => prevState + 5)
      : setDisplayedCards((prevState) => prevState + 7);
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.slice(0, displayedCards).map((card) => {
          return (
            <MoviesCard
              key={card.id}
              nameRU={card.nameRU}
              duration={card.duration}
              image={card.image}
              trailerLink={card.trailerLink}
              isSavedMovies={isSavedMovies}
            />
          );
        })}
      </ul>
      {!isSavedMovies && displayedCards < movies.length ? (
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
};

export default memo(MoviesCardList);
