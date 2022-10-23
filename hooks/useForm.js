import { useMemo, useState } from "react";

const useForm = (defaultValues = {}) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const setFormValue = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value
    });
  }

  const hasError = id => {
    return errors[id] !== 'undefined';
  }

  const getError = id => {
    if (!hasError(id)) {
      return [];
    }

    return errors[id];
  }

  const submitForm = () => {
    console.log(formValues);
    resetForm();
  }

  const resetForm = () => {
    setFormValues(defaultValues);
  }

  return useMemo(() => ({
    formValues,
    errors,
    setFormValue,
    submitForm,
    resetForm,
    hasError,
    getError
  }), [formValues, errors]);
}

export default useForm;
