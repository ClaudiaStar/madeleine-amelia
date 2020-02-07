import React from "react";
import { Parallax } from "react-parallax";

import image from "../../assets/images/food.jpg";
import classes from "./ParallaxEffectDos.module.css";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxEffectDos = () => {
  return (
    <div>
      <Parallax
        bgClassName={classes.ParallaxEffectDos}
        bgImage={image}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              className={classes.ParallaxContentDos}
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 800,
                height: percentage * 800
              }}
            />
          </div>
        )}
      >
        <div style={{ height: "90vh" }}>
          <h2 style={insideStyles}>Create healthy habits, not restrictions.</h2>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxEffectDos;
