import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import "./Register.scss";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import validate from "../../utils/js/validate";
import useForm from "../../hooks/useForm";
import { login, register, getSavedMovies } from "../../utils/js/MainApi";
import { useNavigate } from "react-router-dom";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const Register = ({ signinPath, onLogin, onUser, onSavedMovies }) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const data = await register(values.name, values.email, values.password);
      const { name, email } = data.message;
      await login(values.email, values.password);
      onLogin(true);
      localStorage.setItem("isLoggedIn", true);
      const savedMovies = await getSavedMovies();
      onSavedMovies(savedMovies);
      onUser({ name, email });
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
      setCurrentInfoMessage({
        message: err.message,
        success: false,
      });
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleRegister,
    "handleRegister",
    validate
  );

  const isButtonDisabled = () => {
    return errors.email || errors.name;
  };

  return (
    <section className="login sign">
      <form className="form sign__form" onSubmit={handleSubmit}>
        <Link alt="На главную страницу" to="/">
          <img className="sign__logo" src={logoPath} alt="Логотип"></img>
        </Link>
        <h3 className="form__title sign__title">Добро пожаловать!</h3>
        <div className="form__input-container sign__input-container">
          <label className="form__input-label sign__input-label">Имя</label>
          <input
            className="form__input sign__input sign__text"
            placeholder="Введите имя"
            autoComplete="new-password"
            name="name"
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
        <div className="form__input-container sign__input-container">
          <label className="form__input-label sign__input-label">E-mail</label>
          <input
            className="form__input sign__input sign__text"
            placeholder="Введите e-mail"
            autoComplete="new-password"
            name="email"
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
        <div className="form__input-container sign__input-container">
          <label className="form__input-label sign__input-label">Пароль</label>
          <input
            className="form__input sign__input sign__text"
            placeholder="Введите пароль"
            autoComplete="new-password"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
          ></input>
          <span
            className={`form__field-error ${
              errors.password ? "form__field-error_active" : ""
            }`}
          >
            {errors.password}
          </span>
        </div>
        <button
          className="form__button form__submit-button"
          id="signup-button"
          type="submit"
          disabled={isButtonDisabled()}
        >
          Зарегистрироваться
        </button>
        <div className="form__redirect-container">
          <span className="form__redirect-text sign__text">
            Уже зарегистрированы?
          </span>
          <Link className="form__redirect-link sign__text" to={signinPath}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  signinPath: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  onUser: PropTypes.func.isRequired,
  onSavedMovies: PropTypes.func.isRequired,
};

export default memo(Register);
