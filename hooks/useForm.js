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

  const submit = () => {
    console.log(formValues);
  }

  return useMemo(() => ({
    formValues,
    errors,
    setFormValue,
    submit,
    hasError,
    getError
  }), [formValues, errors]);
}

export default useForm;
