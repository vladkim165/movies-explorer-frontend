import React from "react";
import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = () => {
  return (
    <>
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
