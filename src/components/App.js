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
import Popup from "./Popup/Popup";
import InfoMessagePopup from "./InfoMessagePopup/InfoMessagePopup";
import imagePath from "../images/card.jpg";
import CurrentInfoMessageContext from "../contexts/CurrentInfoMessageContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

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
  const [movies, setMovies] = useState(null);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isInfoMessage, setIsInfoMessage] = useState(false);
  const [currentInfoMessage, setCurrentInfoMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const aboutProjectRef = useRef(null);
  const techsRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(false);
    setIsInfoMessage(false);
    setCurrentUser({ name: "Майкл", email: "vladkim165@gmail.com" });

    const movies = JSON.parse(localStorage.getItem("movies"));
    setMovies(movies);
  }, []);

  useEffect(() => {
    if (currentInfoMessage !== null) {
      setIsInfoMessage(true);
    }
  }, [currentInfoMessage]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentInfoMessageContext.Provider value={setCurrentInfoMessage}>
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
          <Popup isSideMenuOpen={isSideMenuOpen} isInfoMessage={isInfoMessage}>
            {isSideMenuOpen ? (
              <Menu
                isSideMenuOpen={isSideMenuOpen}
                profilePath={profilePath}
                onSideMenu={setIsSideMenuOpen}
              />
            ) : null}
            {isInfoMessage ? (
              <InfoMessagePopup
                isInfoMessage={isInfoMessage}
                onInfoMessage={setIsInfoMessage}
                infoMessage={currentInfoMessage}
              />
            ) : null}
          </Popup>

          <Routes>
            <Route
              path="/movies"
              element={
                <Movies
                  onShortMovie={setIsShortMovie}
                  isShortMovie={isShortMovie}
                  movies={movies}
                  onMovies={setMovies}
                  isSavedMovies={false}
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
                  onMovies={setMovies}
                  isSavedMovies={true}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path={signinPath}
              element={<Login signupPath={signupPath} />}
            />
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
      </CurrentInfoMessageContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
