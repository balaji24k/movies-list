import React, {useRef} from "react";
import classes from "./Auth.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const professionRef = useRef();

  const signupHandler = async (event) => {
    try {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const mobile = mobileRef.current.value;
      const password = passwordRef.current.value;
      const profession = professionRef.current.value;

      const userDetails = { name, email, mobile, password, profession };
      console.log(userDetails);
      localStorage.setItem(userDetails.name, JSON.stringify(userDetails));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <form  onSubmit={signupHandler}>
        <label>Name:</label>
        <input
          placeholder="Name:"
          className={classes.inputBox}
          ref={nameRef}
          type="text"
        />
        <label>Email:</label>
        <input
          placeholder="Email:"
          className={classes.inputBox}
          ref={emailRef}
          type="email"
        />
        <label>Phone:</label>
        <input
          placeholder="Phone:"
          className={classes.inputBox}
          ref={mobileRef}
          type="number"
        />
        <label>Password:</label>
        <input
          placeholder="Password:"
          className={classes.inputBox}
          ref={passwordRef}
          type="password"
        />
        <label>Profession:</label>
        <select className={classes.inputBox} ref={professionRef}>
          <option value="" hidden>
            Choose Profession
          </option>
          <option value="Engineer">Engineer</option>
          <option value="Teacher">Employee</option>
          <option value="Doctor">Doctor</option>
          <option value="Actor">Actor</option>
        </select>
        <button className={classes.inputBox} type="submit">
          Signup
        </button>
      </form>
      <NavLink to="/login">
         Have Account? login here
      </NavLink>
    </div>
  );
};

export default Signup;
