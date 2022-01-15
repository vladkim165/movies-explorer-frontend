import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="page">
      <Header signup={"/signup"} signin={"/signin"} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
