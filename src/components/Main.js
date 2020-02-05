import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./ParallaxEffect/ParallaxEffect";
import About from "./About/About";
import Programs from "./Programs/Programs";
import Contact from "./ContactForm/ContactForm";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default Main;
