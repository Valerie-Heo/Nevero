import React from "react";
import { NavLink } from "react-router-dom";
import auth from "../firebase/firebase";
import "../styles/components/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-logo">
        Haste
      </NavLink>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            to="/Documentation"
            className="nav-link"
            activeClassName="isActive"
          >
            Docs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/SignIn" className="nav-link" activeClassName="isActive">
            Sign in
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Signup" className="nav-link" activeClassName="isActive">
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
