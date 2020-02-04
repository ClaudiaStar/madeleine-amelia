import React from "react";
import "./App.css";
import ParallaxEffect from "./components/ParallaxEffect/ParallaxEffect.js";
import About from "./components/About/About.js";
import ParallaxEffectDos from "./components/ParallaxEffectDos/ParallaxEffectDos";
import Programs from "./components/Programs/Programs";
import ParallaxEffectTres from "./components/ParallaxEffectTres/ParallaxEffectTres";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <ParallaxEffect />
      <About />
      <ParallaxEffectDos />
      <Programs />
      <ParallaxEffectTres />
      <ContactForm />
    </div>
  );
}

export default App;
