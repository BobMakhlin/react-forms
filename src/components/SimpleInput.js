import { useCallback, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const nameChangeHandler = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const nameBlurHandler = useCallback(() => {
    setNameIsTouched(true);
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      setNameIsTouched(true);
      return;
    }

    console.log("submission handler, name:", name);

    setName("");
    setNameIsTouched(false);
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

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
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// const nameChangeHandler = (event) => {
//   setName(event.target.value);

//   // if (!nameIsValid) {
//   //   if (event.target.value.trim() !== "") {
//   //     setNameIsValid(true);
//   //   }
//   // }
// };

// const nameBlurHandler = () => {
//   setNameIsTouched(true);

//   // if (name.trim() === "") {
//   //   setNameIsValid(false);
//   // }
// };

// // const formSubmitHandler = (event) => {
// //   event.preventDefault();

// //   setNameIsTouched(true);

// //   if (name.trim() === "") {
// //     setNameIsValid(false);
// //     return;
// //   }

// //   console.log("submission handler, name:", name);

// //   setNameIsValid(true);
// //   setName("");
// // };
