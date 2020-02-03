import React from "react";
import { Parallax, Background } from "react-parallax";

import image2 from "../../assets/images/img-2.jpg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  backgroundColor: "#3A473D8A",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxEffect = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}>
            <h1>Intuitive Wellness △ Mindful Mama</h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxEffect;
