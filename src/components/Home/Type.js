import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Data Analyst",
          "Google Crowdsource Influncer",
          "MERN Stack Developer",
          "Frontend Developer",
          "Team Lead,ELA VIT-Bhopal"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
