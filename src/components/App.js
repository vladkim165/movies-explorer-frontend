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
import CurrentInfoMessageContext from "../contexts/CurrentInfoMessageContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { auth, getSavedMovies } from "../utils/js/MainApi";
import RequireAuth from "./RequireAuth/RequireAuth";

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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [movies, setMovies] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isInfoMessage, setIsInfoMessage] = useState(false);
  const [currentInfoMessage, setCurrentInfoMessage] = useState({
    message: "",
    success: false,
  });
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const aboutProjectRef = useRef(null);
  const techsRef = useRef(null);
  const aboutMeRef = useRef(null);

  // gets states of movies and short movies checkbox
  useEffect(() => {
    const moviesFromStorage = JSON.parse(localStorage.getItem("movies"));
    setMovies(moviesFromStorage);
    const isShortMoviesStateFromStorage =
      localStorage.getItem("isShortMovies") == "true";
    setIsShortMovie(isShortMoviesStateFromStorage);
  }, []);

  // checks if there's a message and shows info popup
  useEffect(() => {
    if (currentInfoMessage?.message && currentInfoMessage.message !== "") {
      setIsInfoMessage(true);
    }
  }, [currentInfoMessage?.message]);

  // checks for jwt cookie and gets saved movies
  useEffect(async () => {
    try {
      const data = await auth();
      if (data.message !== "Необходима авторизация") {
        const { name, email } = data;
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        setCurrentUser({ name, email });
        const savedMovies = await getSavedMovies();
        setSavedMovies(savedMovies);
      }
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        message:
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        success: false,
      });
    }
  }, []);

  // saves short movies state
  useEffect(() => {
    localStorage.setItem("isShortMovies", isShortMovie);
  }, [isShortMovie]);

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
                <RequireAuth isLoggedIn={isLoggedIn}>
                  <Movies
                    onShortMovie={setIsShortMovie}
                    isShortMovie={isShortMovie}
                    movies={movies}
                    onMovies={setMovies}
                    isSavedMovies={false}
                    savedMovies={savedMovies}
                    onSavedMovies={setSavedMovies}
                  />
                </RequireAuth>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <RequireAuth isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    onShortMovie={setIsShortMovie}
                    isShortMovie={isShortMovie}
                    savedMovies={savedMovies}
                    onSavedMovies={setSavedMovies}
                    onMovies={setMovies}
                    isSavedMovies={true}
                  />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth isLoggedIn={isLoggedIn}>
                  <Profile onLogin={setIsLoggedIn} onUser={setCurrentUser} />
                </RequireAuth>
              }
            />
            <Route
              path={signinPath}
              element={
                <Login
                  signupPath={signupPath}
                  onLogin={setIsLoggedIn}
                  onUser={setCurrentUser}
                />
              }
            />
            <Route
              path={signupPath}
              element={
                <Register
                  signinPath={signinPath}
                  onLogin={setIsLoggedIn}
                  onUser={setCurrentUser}
                />
              }
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
