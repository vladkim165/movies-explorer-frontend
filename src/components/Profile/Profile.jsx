import React, { useContext, memo } from "react";
import "./Profile.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import validate from "../../utils/js/validate";
import { unlogin, editProfile } from "../../utils/js/MainApi";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const Profile = ({ onLogin, onUser }) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const navigate = useNavigate();
  const handleEdit = async () => {
    const isEdited = values.name !== name || values.email !== email;
    if (isEdited) {
      try {
        const updatedUser = await editProfile(values.name, values.email);
        const { name, email } = updatedUser;
        onUser({ name, email });
        setCurrentInfoMessage({
          success: true,
          message: "Данные успешно изменены",
        });
      } catch (err) {
        console.log(err);
        setCurrentInfoMessage({
          message: err.message,
          success: false,
        });
      }
    } else {
      setCurrentInfoMessage({
        success: false,
        message: "Измените данные для отправки запроса редактирования профиля",
      });
    }
  };
  const handleLogout = async () => {
    try {
      await unlogin();
      onLogin(false);
      onUser({ name: "", email: "" });
      localStorage.removeItem("matchedByCharsMovies");
      localStorage.removeItem("matchedSearchedMovies");
      localStorage.removeItem("isShortMovies");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("inputValue");
      localStorage.removeItem("matchedByCharsSavedMovies");
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        message: err.message,
        success: false,
      });
    }
  };
  const isButtonDisabled = () => {
    return errors.email || errors.password;
  };

  const { name, email } = useContext(CurrentUserContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleEdit,
    "handleEdit",
    validate,
    { name: name, email: email }
  );

  return (
    <section className="profile">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">
          Привет,<span> &nbsp;{name}</span>
        </h3>
        <div className="form__input-container">
          <label className="form__input-label form__input-text">Имя</label>
          <input
            className="form__input form__input-text profile__input"
            name="name"
            autoComplete="new-password"
            onChange={handleChange}
            value={values.name || ""}
          ></input>
          <span
            className={`form__field-error ${
              errors.name ? "form__field-error_active" : ""
            }`}
          >
            {errors.name}
          </span>
        </div>
        <div className="form__input-container">
          <label className="form__input-label form__input-text">E-mail</label>
          <input
            className="form__input form__input-text profile__input"
            name="email"
            autoComplete="new-password"
            onChange={handleChange}
            value={values.email || ""}
          ></input>
          <span
            className={`form__field-error ${
              errors.email ? "form__field-error_active" : ""
            }`}
          >
            {errors.email}
          </span>
        </div>
        <button
          className="form__button profile__button"
          id="edit-button"
          type="submit"
          disabled={isButtonDisabled()}
        >
          Редактировать
        </button>
        <button
          className="form__button form__logout-button"
          id="logout-button"
          onClick={handleLogout}
          type="button"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

Profile.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onUser: PropTypes.func.isRequired,
};

export default memo(Profile);
