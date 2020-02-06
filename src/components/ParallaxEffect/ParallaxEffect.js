import React from "react";
import ContactButton from "./ContactButton";
import classes from "./Home.module.css";

import About from "../About/About";

const insideStyles = {
  backgroundColor: "#3A473D8A",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "fit-content"
};
const buttonStyles = {
  display: "inline-block"
};

const nameStyles = {
  fontFamily: "'Molle', cursive",
  color: "#ffffff"
};

const ParallaxEffect = () => {
  return (
    <React.Fragment>
      <div className={classes.HomeBackground}>
        <div style={insideStyles}>
          <h1 style={nameStyles}>Madeleine Amelia</h1>
          <h2>Intuitive Wellness △ Mindful Mama</h2>
          <div style={buttonStyles}>
            <ContactButton />
          </div>
        </div>
      </div>
      <About />
    </React.Fragment>
  );
};

export default ParallaxEffect;
