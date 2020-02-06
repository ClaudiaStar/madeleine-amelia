import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: 800
};

const activeLinkStyle = {
  fontSize: "1.2em"
};

function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.Name}>Madeleine Amelia</div>
      <div className={classes.HomeLink}>
        <NavLink
          to="/"
          exact={true}
          style={linkStyle}
          activeStyle={activeLinkStyle}
        >
          Home
        </NavLink>
      </div>
      <div className={classes.ProgramsLink}>
        <NavLink to="/programs" style={linkStyle} activeStyle={activeLinkStyle}>
          Programs
        </NavLink>
      </div>
      <div className={classes.ContactLink}>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
          Contact Me
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
