import { useEffect, useState } from "react";

// form validation, works along with validate(check utils/js)
const useForm = (callback, action, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(action, values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    setErrors(validate(action, values));
  }, []);

  useEffect(() => {
    setErrors(validate(action, values));
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [values, isSubmitting]);

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const resetInputs = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    resetInputs,
  };
};

export default useForm;
