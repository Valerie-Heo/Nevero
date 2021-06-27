import React from "react";
import auth from "../firebase/firebase";
const HomePage = () => {
  return (
    <div>
      <p>Hey ! There</p>
      <button onClick={() => auth.auth().signOut()}> Sign out</button>
    </div>
  );
};

export default HomePage;
