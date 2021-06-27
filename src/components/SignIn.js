import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../actions/auth";
import { auth } from "../firebase/firebase";
import NavBar from "./Navbar";
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
      <form onSubmit={handleSignUp}>
        <label>
          Email :
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password :
          <input name="password" type="password" placeholder="password" />
        </label>
        <button type="submit"> Log in !</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
