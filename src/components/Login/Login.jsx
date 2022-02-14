import React, { memo, useContext } from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import validate from "../../utils/js/validate";
import useForm from "../../hooks/useForm";
import { login, getSavedMovies } from "../../utils/js/MainApi";
import { useNavigate } from "react-router-dom";
import CurrentInfoMessageContext from "../../contexts/CurrentInfoMessageContext";

const Login = ({ signupPath, onLogin, onUser, onSavedMovies }) => {
  const setCurrentInfoMessage = useContext(CurrentInfoMessageContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const data = await login(values.email, values.password);
      const { name, email } = data.message;
      onLogin(true);
      localStorage.setItem("isLoggedIn", true);
      onUser({ name, email });
      const savedMovies = await getSavedMovies();
      onSavedMovies(savedMovies);
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
      if (err.status == 401) {
        setCurrentInfoMessage({
          message: "Введены неправильный email или пароль",
          success: false,
        });
      } else {
        setCurrentInfoMessage({
          message: err.statusText,
          success: false,
        });
      }
    }
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleLogin,
    "handleLogin",
    validate
  );

  const isButtonDisabled = () => {
    return errors.email || errors.password;
  };

  return (
    <section className="login sign">
      <form className="form sign__form" onSubmit={handleSubmit}>
        <Link alt="На главную страницу" to="/">
          <img className="sign__logo" src={logoPath} alt="Логотип"></img>
        </Link>
        <h3 className="form__title sign__title">Рады видеть!</h3>
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
          className="form__button form__submit-button form__signin-button"
          id="signin-button"
          type="submit"
          disabled={isButtonDisabled()}
        >
          Войти
        </button>
        <div className="form__redirect-container">
          <span className="form__redirect-text sign__text">
            Ещё не зарегистрированы?
          </span>
          <Link className="form__redirect-link sign__text" to={signupPath}>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

Login.propTypes = {
  signupPath: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  onUser: PropTypes.func.isRequired,
  onSavedMovies: PropTypes.func.isRequired,
};

export default memo(Login);
