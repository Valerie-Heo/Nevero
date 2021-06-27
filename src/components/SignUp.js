import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { auth } from "../firebase/firebase";
import NavBar from "./Navbar";
const SignUp = ({ history }) => {
  const submiteHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <NavBar />
      <h2> Sign Up </h2>
      <form onSubmit={submiteHandler}>
        <label>
          Email :<input type="email" name="email" placeholder="Email"></input>
        </label>
        <label>
          password
          <input type="password" name="password" placeholder="Password"></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
