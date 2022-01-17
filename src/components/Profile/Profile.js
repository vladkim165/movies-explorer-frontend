import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <form className="form">
        <h3 className="form__title">
          Привет,<span> &nbsp;Виталий!</span>
        </h3>
        <div className="form__input-container">
          <label className="form__input-label form__input-text">Имя</label>
          <input
            className="form__input form__input-text"
            placeholder="Виталий"
          ></input>
        </div>
        <div className="form__input-container">
          <label className="form__input-label form__input-text">E-mail</label>
          <input
            className="form__input form__input-text"
            placeholder="pochta@gmail.com"
          ></input>
        </div>
        <button className="form__button" id="edit-button">
          Редактировать
        </button>
        <button className="form__button form__logout-button" id="logout-button">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
