import { useState, useEffect } from "react";
import Api from '../../utils/testapi'

const UseSignup = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    Api.signup(values)
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default UseSignup;
