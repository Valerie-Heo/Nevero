import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { auth } from "../firebase/firebase";
import { NavLink } from "react-router-dom";
import NavBar from "./Navbar";
import "../styles/components/Signup.scss";
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
      <div className="Sng">
        <div className="Form">
          <h2> Register </h2>

          <form onSubmit={submiteHandler}>
            <label className="innerForm">
              Email :
              <input type="email" name="email" placeholder="Email"></input>
            </label>
            <label className="innerForm">
              Password :
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </label>
            <button type="submit" className="but">
              Register
            </button>
            <NavLink to="/SignIn" className="link">
              Already an account ?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
