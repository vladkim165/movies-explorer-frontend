const validate = (callback, values) => {
  const { name } = callback;
  let errors = {};

  if (name === "handleRegister") {
    if (!values.email) {
      errors.email = "Заполните поле ввода почты";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Неверный формат почты";
    }
    if (!values.name) {
      errors.name = "Заполните поле ввода имени";
    } else if (values.name.length < 2 || values.name.length > 15) {
      errors.name = "Имя должно содержать от 2 до 15 символов";
    }
    if (!values.password) {
      errors.password = "Заполните поле ввода пароля";
    } else if (values.password.length < 5 || values.password.length > 15) {
      errors.password = "Пароль должен содержать от 5 до 15 символов";
    }
  } else if (name === "handleLogin") {
    if (!values.email) {
      errors.email = "Заполните поле ввода почты";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Неверный формат почты";
    }
    if (!values.password) {
      errors.password = "Заполните поле ввода пароля";
    } else if (values.password.length < 5 || values.password.length > 15) {
      errors.password = "Пароль должен содержать от 5 до 15 символов";
    }
  } else if (name === "handleEdit") {
    if (!values.name) {
      errors.name = "Заполните поле ввода имени";
    } else if (values.name.length < 2 || values.name.length > 15) {
      errors.name = "Имя должно содержать от 2 до 15 символов";
    }
    if (!values.email) {
      errors.email = "Заполните поле ввода почты";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Неверный формат почты";
    }
  }
  return errors;
};

export default validate;
