import { useState } from 'react';

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  function clearForm() {
    setValues(defaultValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
