import React from "react";
import Navbar from "./Navbar";
import "../styles/components/Dashboard.scss";
import { NavLink } from "react-router-dom";
const DropPage = () => {
  document.title = "Haste";
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="intro">
        <h1>Haste</h1>
        <p>A Project management tool built just for you !</p>
        <div className="Links">
          <NavLink to="/SignUp" className="nav-link1">
            Get Started
          </NavLink>
          <NavLink to="/Documentation" className="nav-link2">
            Go to the docs
          </NavLink>
        </div>
      </div>
      <div className="box-content">
        <div className="boxer">
          <div className="Cont">
            <h2>Fast</h2>
            <p>
              Using haste allows people and companies to work harder and faster
              by managing there own task and making sure to track them
            </p>
          </div>
          <div className="Cont">
            <h2>Free</h2>
            <p>
              You and your friends can enjoy our serveces free with out having
              to pay a single dollar what are you for go call your friend and
              enjoy our website
            </p>
          </div>
          <div className="Cont">
            <h2>Forward</h2>
            <p>
              Haste isn't just free and fast website it is very simple you
              wouldn't need any experniece in using it but if you still have
              more trouble make sure you visit our{" "}
              <NavLink to="/Documentation" className="docs">
                docs
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropPage;
