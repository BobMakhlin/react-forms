import { useCallback, useState } from "react";

const useFormControl = (validatorFn) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validatorFn(value);
  const hasError = !isValid && isTouched;

  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  const blurHandler = useCallback(() => {
    setIsTouched(true);
  }, []);
  const reset = useCallback(() => {
    setValue("");
    setIsTouched(false);
  }, []);
  const markAsTouched = useCallback(() => {
    setIsTouched(true);
  }, []);

  return {
    value,
    isTouched,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
    markAsTouched,
  };
};

export default useFormControl;
