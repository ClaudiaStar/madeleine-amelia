import React from "react";
import "./App.css";
import ParallaxEffect from "./components/ParallaxEffect/ParallaxEffect.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <ParallaxEffect />
      <About />
    </div>
  );
}

export default App;
