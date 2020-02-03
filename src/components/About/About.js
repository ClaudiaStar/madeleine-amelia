import React from "react";

import face from "../../assets/images/face.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <img src={face} alt="self"></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in iaculis
        diam. Aenean non fringilla orci. Fusce eget felis urna. Vivamus
        tincidunt dictum felis eget facilisis. Etiam sollicitudin, arcu vel
        ultricies laoreet, risus odio fermentum mi, volutpat feugiat elit risus
        faucibus ante. Donec tincidunt dignissim ipsum, sit amet faucibus lorem
        dignissim at. Proin interdum non dolor quis rutrum. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
};

export default About;
