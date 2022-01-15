import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Movies from "./Movies/Movies";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    setIsLoggedIn(true);
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
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
};

export default App;
