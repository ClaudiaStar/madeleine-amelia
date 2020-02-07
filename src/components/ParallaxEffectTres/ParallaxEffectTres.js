import React from "react";
import classes from "./ParallaxEffectTres.module.css";

const insideStyles = {
  backgroundColor: "#E9EBEAA1",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxEffect = () => {
  return (
    <React.Fragment>
      <div className={classes.contactBackgroundContainer}>
        <div className={classes.contactBackground}>
          <div style={insideStyles}>
            <h2>
              I can’t wait for the world to see just how beautiful you are.
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParallaxEffect;
