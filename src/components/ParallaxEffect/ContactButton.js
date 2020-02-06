import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./ContactButton.module.css";

const ContactButton = () => {
  return (
    <NavLink to="/contact">
      <button className={classes.ContactButton}>Contact Me</button>
    </NavLink>
  );
};

export default ContactButton;
