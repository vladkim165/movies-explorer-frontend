import { useEffect, useState } from "react";

// form validation, works along with validate(check utils/js)
const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event = event || window.event;
    if (event) event.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    handleChange(event);
    setErrors(validate(callback, values));
  }, []);

  useEffect(() => {
    setErrors(validate(callback, values));
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [values, isSubmitting]);

  const handleChange = (event) => {
    event = event || window.event;
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

export default useForm;
