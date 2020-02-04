import React from "react";

import face from "../../assets/images/face.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <img src={face} alt="self"></img>
      <p>
        I’m a green juice chugging internationally certified holistic
        nutritionist, an athlete, yogi, and mama to Riley. I’m a recovered
        binge-restrict cycle, over-exercising, not self-loving and lost human. I
        believe change is happening in the shift from short term fixes to long
        term HAPPINESS. In fact, I am here to teach women how to take their
        bodies BACK from the diet industry, to give you the tools you need to
        create intuitive capabilities that will lead you to optimal health, and
        the body of your dreams.
      </p>
    </div>
  );
};

export default About;
