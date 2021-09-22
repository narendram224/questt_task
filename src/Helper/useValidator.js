import { useState, useEffect } from "react";

const useFormValidator = (callback,initialValue={}, validate) => {
  
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    event&&event.preventDefault();
    setErrors(validate(initialValue));
    setIsSubmitting(true);
    
  }; 
  useEffect(() => {  
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors,initialValue]);

  return {
    handleSubmit,
    values,
    errors,
    setErrors,
    setIsSubmitting,
  };
};

export default useFormValidator;