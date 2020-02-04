import React from "react";
import { Parallax } from "react-parallax";
import ContactButton from "./ContactButton";

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
const buttonStyles = {
  display: "inline-block"
};

const nameStyles = {
  fontFamily: "'Molle', cursive"
};

const ParallaxEffect = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}>
            <h1 style={nameStyles}>Madeleine Amelia</h1>
            <h2>Intuitive Wellness △ Mindful Mama</h2>
            <div style={buttonStyles}>
              <ContactButton />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxEffect;
