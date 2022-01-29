const ERR_MESSAGES = {
  email: {
    format: "Неверный формат почты",
  },
  name: {
    length: "Имя должно содержать от 2 до 15 символов",
    format: "Только латиница, кириллица, пробел или дефис",
  },
  password: {
    length: "Пароль должен содержать от 5 до 15 символов",
  },
};

const validate = (callback, values) => {
  const { name } = callback;
  let errors = {};

  if (name === "handleRegister") {
    if (!values.email) {
      errors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = ERR_MESSAGES.email.format;
    }
    if (!values.name) {
      errors.name = true;
    } else if (values.name.length < 2 || values.name.length > 15) {
      errors.name = ERR_MESSAGES.name.length;
    } else if (!/^[а-яa-zёЁ -]+$/giu.test(values.name)) {
      errors.name = ERR_MESSAGES.name.format;
    }
    if (!values.password) {
      errors.password = true;
    } else if (values.password.length < 5 || values.password.length > 15) {
      errors.password = ERR_MESSAGES.password.length;
    }
  } else if (name === "handleLogin") {
    if (!values.email) {
      errors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = ERR_MESSAGES.email.format;
    }
    if (!values.password) {
      errors.password = true;
    } else if (values.password.length < 5 || values.password.length > 15) {
      errors.password = ERR_MESSAGES.password.length;
    }
  } else if (name === "handleEdit") {
    if (!values.name) {
      errors.name = true;
    } else if (values.name.length < 2 || values.name.length > 15) {
      errors.name = ERR_MESSAGES.name.length;
    } else if (!/^[а-яa-zёЁ -]+$/giu.test(values.name)) {
      errors.name = ERR_MESSAGES.name.format;
    }
    if (!values.email) {
      errors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = ERR_MESSAGES.email.format;
    }
  } else if (name === "handleSearch") {
    if (!values.film) {
      errors.film = true;
    }
  }
  return errors;
};

export default validate;
