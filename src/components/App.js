import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import imagePath from "../images/card.jpg";

const movies = [
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

const savedMovies = [
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

const paths = {
  signupPath: "/signup",
  signinPath: "/signin",
  allMoviesPath: "/movies",
  savedMoviesPath: "/saved-movies",
  profilePath: "/profile",
};

const { signupPath, signinPath, allMoviesPath, savedMoviesPath, profilePath } =
  paths;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);

  const handleNotFoundPage = (bool) => {
    setIsNotFoundPage(bool);
  };
  const handleShortMovie = () => {
    setIsShortMovie((bool) => !bool);
  };

  useEffect(() => {
    setIsNotFoundPage(false);
    setIsLoggedIn(true);
  }, []);

  return (
    <div className="page">
      <Header
        signupPath={signupPath}
        signinPath={signinPath}
        allMoviesPath={allMoviesPath}
        savedMoviesPath={savedMoviesPath}
        profilePath={profilePath}
        isLoggedIn={isLoggedIn}
        isNotFoundPage={isNotFoundPage}
      />
      <Routes>
        <Route
          path="/movies"
          element={
            <Movies
              onShortMovie={handleShortMovie}
              isShortMovie={isShortMovie}
              movies={movies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              onShortMovie={handleShortMovie}
              isShortMovie={isShortMovie}
              savedMovies={savedMovies}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path={signinPath} element={<Login signinPath={signinPath} />} />
        <Route
          path={signupPath}
          element={<Register signupPath={signupPath} />}
        />
        <Route exact path="/" element={<Main />} />
        <Route
          path="*"
          element={<NotFoundPage onNotFoundPage={handleNotFoundPage} />}
        />
      </Routes>
      <Footer
        signupPath={signupPath}
        signinPath={signinPath}
        profilePath={profilePath}
        isNotFoundPage={isNotFoundPage}
      />
    </div>
  );
};

export default App;
