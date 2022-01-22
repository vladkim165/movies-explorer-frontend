import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Register.scss";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import validate from "../../utils/js/validate";
import useForm from "../../hooks/useForm";

const Register = ({ signupPath }) => {
  const handleRegister = () => {
    console.log("Register logic");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleRegister,
    validate
  );

  return (
    <section className="login sign">
      <form className="form sign__form" onSubmit={handleSubmit}>
        <img className="sign__logo" src={logoPath} alt="Логотип"></img>
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
          {errors.name ? (
            <span
              className={`form__field-error ${
                errors.name && "form__field-error_active"
              }`}
            >
              {errors.name}
            </span>
          ) : null}
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
          {errors.email ? (
            <span
              className={`form__field-error ${
                errors.email && "form__field-error_active"
              }`}
            >
              {errors.email}
            </span>
          ) : null}
        </div>
        <div className="form__input-container sign__input-container">
          <label className="form__input-label sign__input-label">Пароль</label>
          <input
            className="form__input sign__input sign__text"
            placeholder="Введите пароль"
            autoComplete="new-password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
          ></input>
          {errors.password ? (
            <span
              className={`form__field-error ${
                errors.password && "form__field-error_active"
              }`}
            >
              {errors.password}
            </span>
          ) : null}
        </div>
        <button
          className="form__button form__submit-button"
          id="signin-button"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <div className="form__redirect-container">
          <span className="form__redirect-text sign__text">
            Уже зарегистрированы?
          </span>
          <Link className="form__redirect-link sign__text" to={signupPath}>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  signupPath: PropTypes.string.isRequired,
};

export default memo(Register);
