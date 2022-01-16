import React from "react";
import "./MoviesCardList.scss";
import imagePath from "../../images/card.jpg";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  const data = [
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 1,
      isLiked: true,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 2,
      isLiked: true,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 3,
      isLiked: true,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 4,
      isLiked: true,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 5,
      isLiked: true,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 6,
      isLiked: false,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 7,
      isLiked: false,
    },
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 42м",
      image: imagePath,
      id: 8,
      isLiked: false,
    },
  ];

  const [displayedCards, setDisplayedCards] = React.useState(7);

  const handleChangeDisplayedCards = () => {
    setDisplayedCards((prevState) => prevState + 7);
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {data.slice(0, displayedCards).map((card) => {
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

export default MoviesCardList;
