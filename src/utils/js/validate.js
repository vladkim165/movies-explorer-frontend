const validate = (action, values) => {
  const ERR_MESSAGES = {
    email: {
      empty: "Заполните поле",
      format: "Неверный формат почты",
    },
    name: {
      empty: "Заполните поле",
      length: "Имя должно содержать от 2 до 15 символов",
      format: "Только латиница, кириллица, пробел или дефис",
    },
    password: {
      length: "Пароль должен содержать от 5 до 15 символов",
    },
  };

  let errors = {};

  if (action === "handleRegister") {
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
  } else if (action === "handleLogin") {
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
  } else if (action === "handleEdit") {
    if (!values.name) {
      errors.name = ERR_MESSAGES.name.empty;
    } else if (values.name.length < 2 || values.name.length > 15) {
      errors.name = ERR_MESSAGES.name.length;
    } else if (!/^[а-яa-zёЁ -]+$/giu.test(values.name)) {
      errors.name = ERR_MESSAGES.name.format;
    }
    if (!values.email) {
      errors.email = ERR_MESSAGES.email.empty;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = ERR_MESSAGES.email.format;
    }
  }
  return errors;
};

export default validate;
