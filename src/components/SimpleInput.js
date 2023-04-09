import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);

    if (!nameIsValid) {
      if (event.target.value.trim() !== "") {
        setNameIsValid(true);
      }
    }
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    console.log("submission handler, name:", name);

    setNameIsValid(true);
    setName("");
  };

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
