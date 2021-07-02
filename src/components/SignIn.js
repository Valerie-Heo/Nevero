import React, { useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../actions/auth";
import { auth } from "../firebase/firebase";
import NavBar from "./Navbar";
import "../styles/components/Signin.scss";
const SignIn = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/Home");
      } catch (error) {
        alert("error");
      }
    },
    [history]
  );
  document.title = "Sign in";

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/Home" />;
  }
  return (
    <div>
      <NavBar />
      <div className="Sng">
        <div className="Form">
          <h2>Login</h2>
          <form onSubmit={handleSignUp}>
            <label className="innerForm">
              Email :
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label className="innerForm">
              Password :
              <input name="password" type="password" placeholder="password" />
            </label>
            <button type="submit" className="but">
              {" "}
              Login
            </button>
            <NavLink to="/Signup" className="link2">
              Need an account ?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
