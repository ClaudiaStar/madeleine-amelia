import React from "react";
import { Parallax } from "react-parallax";

import image4 from "../../assets/images/img4.jpg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  backgroundColor: "#E9EBEAA1",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxEffect = () => {
  const myRef = React.createRef();
  return (
    <div style={styles}>
      <Parallax bgImage={image4} strength={500} ref={myRef}>
        <div style={{ height: 300 }}>
          <div style={insideStyles}>
            <h1>
              I can’t wait for the world to see just how beautiful you are.
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxEffect;
