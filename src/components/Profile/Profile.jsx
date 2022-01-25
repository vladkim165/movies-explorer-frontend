import React, { useContext } from "react";
import "./Profile.scss";
import validate from "../../utils/js/validate";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = () => {
  const { name, email } = useContext(CurrentUserContext);
  const handleEdit = () => {
    console.log("Edit Logic");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleEdit,
    validate
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
            className="form__input form__input-text"
            placeholder={name}
            name="name"
            autoComplete="new-password"
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
        <div className="form__input-container">
          <label className="form__input-label form__input-text">E-mail</label>
          <input
            className="form__input form__input-text"
            placeholder={email}
            name="email"
            autoComplete="new-password"
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
        <button className="form__button" id="edit-button" type="submit">
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
