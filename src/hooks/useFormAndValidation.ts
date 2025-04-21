import { ChangeEvent, FocusEvent, useCallback, useState } from 'react';

export function useFormAndValidation(init = {}) {
  const [values, setValues] = useState<Record<string, string>>(init);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;

    setErrors(prev => ({
      ...prev,
      [name]: e.target.validationMessage
    }));

    setIsValid((e.target.closest('.form') as HTMLFormElement).checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues: Record<string, string> = {},
      newErrors: Record<string, string> = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    resetForm,
    setValues,
    setIsValid
  };
}
