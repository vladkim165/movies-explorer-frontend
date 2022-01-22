import React, { useEffect, useState, useRef } from "react";
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
import Menu from "./Menu/Menu";
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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const aboutProjectRef = useRef(null);
  const techsRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    console.log(isNotFoundPage);
  }, [isNotFoundPage]);

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
        onSideMenu={setIsSideMenuOpen}
      />
      <Menu
        isSideMenuOpen={isSideMenuOpen}
        profilePath={profilePath}
        onSideMenu={setIsSideMenuOpen}
      />
      <Routes>
        <Route
          path="/movies"
          element={
            <Movies
              onShortMovie={setIsShortMovie}
              isShortMovie={isShortMovie}
              movies={movies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              onShortMovie={setIsShortMovie}
              isShortMovie={isShortMovie}
              savedMovies={savedMovies}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path={signinPath} element={<Login signupPath={signupPath} />} />
        <Route
          path={signupPath}
          element={<Register signinPath={signinPath} />}
        />
        <Route
          exact
          path="/"
          element={
            <Main
              aboutProjectRef={aboutProjectRef}
              techsRef={techsRef}
              aboutMeRef={aboutMeRef}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage onNotFoundPage={setIsNotFoundPage} />}
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
