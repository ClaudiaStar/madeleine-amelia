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

const toggleMenuClasses = () => {
  let burgerIcon = document.getElementById("burger");
  burgerIcon.classList.toggle(classes.isActive);
  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.toggle(classes.Opened);
};

const handleMenuClicked = () => {
  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.toggle(classes.Opened);
};

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Burger} id="burger" onClick={toggleMenuClasses}>
        <div className={classes.Lines}>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
        </div>
      </div>

      <div
        className={classes.Menu}
        id="menu-container"
        onClick={handleMenuClicked}
      >
        <div className={classes.Name}>
          <NavLink
            to="/"
            exact={true}
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Madeleine Amelia
          </NavLink>
        </div>
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
          <NavLink
            to="/programs"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Programs
          </NavLink>
        </div>
        <div className={classes.ContactLink}>
          <NavLink
            to="/contact"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
