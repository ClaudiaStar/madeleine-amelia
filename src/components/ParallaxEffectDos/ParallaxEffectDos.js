import React from "react";

import classes from "./ParallaxEffectDos.module.css";

const insideStyles = {
  backgroundColor: "#3A473D8A",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "#ffffff",
  filter: "blur(0px)"
};

const ParallaxEffectDos = () => {
  return (
    <React.Fragment>
      <div className={classes.programsBackground}></div>
      <div style={insideStyles}>
        <h2>Create healthy habits, not restrictions.</h2>
      </div>
    </React.Fragment>
  );
};

export default ParallaxEffectDos;
