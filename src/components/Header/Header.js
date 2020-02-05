import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.Header}>
      <NavLink to="/" activeStyle={{ fontWeight: 900 }}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={{ fontWeight: 900 }}>
        About
      </NavLink>
      <NavLink to="/programs" activeStyle={{ fontWeight: 900 }}>
        Programs
      </NavLink>
      <NavLink to="/contact" activeStyle={{ fontWeight: 900 }}>
        Contact Me
      </NavLink>
    </header>
  );
}

export default Header;
