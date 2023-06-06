import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <p>p element</p>
      <img src={image} alt="I made this" />
      <h2>About Me</h2>
    </div>
  );
}

export default About;
