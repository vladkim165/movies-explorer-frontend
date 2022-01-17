import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import imagePath from "../images/card.jpg";

const App = () => {
  const cards = [
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

  const savedCards = [
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
  ];
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  const [isShortMovie, setIsShortMovie] = React.useState(true);
  const handleIsShortMovie = React.useCallback(() => {
    setIsShortMovie((boolean) => !boolean);
  }, []);
  return (
    <div className="page">
      <Header
        signup={"/signup"}
        signin={"/signin"}
        isLoggedIn={isLoggedIn}
        allFilmsPath="/films"
        savedFilmsPath="/my-films"
        accountPath="/users/me"
      />
      <Routes>
        <Route
          path="/movies"
          element={
            <Movies
              setIsShortMovie={handleIsShortMovie}
              isShortMovie={isShortMovie}
              cards={cards}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              setIsShortMovie={handleIsShortMovie}
              isShortMovie={isShortMovie}
              savedCards={savedCards}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
