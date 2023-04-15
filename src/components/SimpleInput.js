import useFormControl from "../hooks/use-form-control";

const SimpleInput = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
    markAsTouched: markNameAsTouched,
  } = useFormControl((name) => name.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
    markAsTouched: markEmailAsTouched,
  } = useFormControl((email) => email.includes("@"));

  const submitHandler = (event) => {
    event.preventDefault();

    markNameAsTouched();
    markEmailAsTouched();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log("submission handler, name:", name);

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const formIsInvalid = nameInputHasError || emailInputHasError;

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
