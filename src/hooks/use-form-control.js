import { useCallback, useState } from "react";

const useFormControl = ({ validationType, validatorFn }) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

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

  const validate = useCallback(
    (value) => {
      if (!validationType) {
        return validatorFn(value);
      }

      switch (validationType) {
        case "required":
          return value !== "";
        case "email":
          return value.includes("@");
        default:
          return true;
      }
    },
    [validationType, validatorFn]
  );

  const isValid = validate(value);
  const hasError = !isValid && isTouched;

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
