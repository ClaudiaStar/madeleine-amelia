import React from "react";
import classes from "./Programs.module.css";

import ParallaxEffectDos from "../ParallaxEffectDos/ParallaxEffectDos";

const Programs = () => {
  return (
    <React.Fragment>
      <ParallaxEffectDos />
      <div className={classes.ProgramsHeadText}>
        <h2>
          My intention is to be a compass to those that are lost in their
          ambitions and to bring a light to this world.{" "}
        </h2>
        <h3>With my coaching I focus on:</h3>
      </div>

      <div className={classes.Programs}>
        <p>Step by step guides and coaching on intuitive eating</p>
        <p>
          Mindset readjustments and reparenting tools to uncover what may be
          blocking your true self.
        </p>
        <p>Personalized nutrition education</p>
        <p>A personalised nutritional plan that fits around your lifestyle</p>
        <p>
          An exercise ( or non exercise) regime that is FUN and something you
          actually want to do
        </p>
        <p>
          Emotional eating recovery, gut health reset, blood sugar rebalancing
        </p>
        <p>Soul purpose guidance</p>
      </div>
    </React.Fragment>
  );
};

export default Programs;
