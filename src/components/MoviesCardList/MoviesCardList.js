import React from "react";
import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import PropTypes from "prop-types";

const MoviesCardList = ({ cards }) => {
  const [displayedCards, setDisplayedCards] = React.useState(7);

  const handleChangeDisplayedCards = () => {
    setDisplayedCards((prevState) => prevState + 7);
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cards.slice(0, displayedCards).map((card) => {
          return (
            <MoviesCard
              key={card.id}
              title={card.title}
              duration={card.duration}
              image={card.image}
              isLiked={card.isLiked}
            />
          );
        })}
      </ul>
      <button
        className="movies-card-list__more-button"
        onClick={handleChangeDisplayedCards}
      >
        Ещё
      </button>
    </section>
  );
};

MoviesCardList.propTypes = {
  cards: PropTypes.array,
};

export default MoviesCardList;
