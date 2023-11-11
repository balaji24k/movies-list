import React, { useRef } from "react";
import classes from "./Auth.module.css";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  
  const loginHandler = (event) => {
    try {
      event.preventDefault();
      const enteredName = nameRef.current.value;
      const enteredPassword = passwordRef.current.value;
      const userKeys = Object.keys(localStorage);
      const userDetails = [];
      for(let key=0; key<userKeys.length; key++) {
        const user =  JSON.parse(localStorage.getItem(userKeys[key]));
        userDetails.push(user);
      }
      console.log(userDetails);
      const existinguser = userDetails.find(user => user.name === enteredName);
      if(!existinguser) {
        throw new Error("user does not exist!")
      }
      if(enteredPassword !== existinguser.password) {
        throw new Error("Incorrect Password!")
      }
      alert("Login Succesfull!");
      history.replace("/movies");
      localStorage.setItem("isLoggedIn",true);
      console.log(existinguser);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={classes.container} >
      <form onSubmit={loginHandler}>
        <label>Name:</label>
        <input
          placeholder="Name:"
          className={classes.inputBox}
          ref={nameRef}
          type="text"
        />
        <label>Password:</label>
        <input
          placeholder="Password:"
          className={classes.inputBox}
          ref={passwordRef}
          type="password"
        />
        <button className={classes.inputBox} type="submit">
          Signup
        </button>
      </form>
      <NavLink to="/">Have Account? login here</NavLink>
    </div>
  );
};

export default Login;
