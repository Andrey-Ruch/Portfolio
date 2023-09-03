import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__about-container">
        <h2 className="head-text">About</h2>

        <div className="app__about-description">
          <p style={{ marginTop: 10 }}>
            I am a software developer, specialising in the app development
            arena. For the last 3 years, I have been developing games using C++,
            C# and Java programming languages.
            <br /> <br /> I’m currently employed as senior software developer at
            App Dev One Two Developers. I’m hands on in all stages of the
            software development cycle, from planning and design to testing and
            deployment. No two days are the same for me; my tasks may involve
            analysing algorithms, altering code, fixing bugs, brainstorming
            ideas or integrating new systems.
          </p>
        </div>

        <button type="button">
          <a download="Andrey-Ruch-CV" href={images.cv}>
            Download CV
          </a>
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
