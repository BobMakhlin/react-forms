import useFormControl from "../hooks/use-form-control";

const BasicForm = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    markAsTouched: markFirstNameAsTouched,
    reset: resetFirstName,
  } = useFormControl({ validationType: "required" });

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    markAsTouched: markLastNameAsTouched,
    reset: resetLastName,
  } = useFormControl({ validationType: "required" });

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    markAsTouched: markEmailAsTouched,
    reset: resetEmail,
  } = useFormControl({ validationType: "email" });

  const submitHandler = (event) => {
    event.preventDefault();

    markFirstNameAsTouched();
    markLastNameAsTouched();
    markEmailAsTouched();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const formIsInvalid = firstNameHasError || lastNameHasError || emailHasError;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={firstName}
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name should not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            value={lastName}
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name should not be empty.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={email}
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
