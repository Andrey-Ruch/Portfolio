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
            I am a Software engineer with a passion for problem-solving. I am a
            curious and self-learner with a high motivation to expand my
            knowledge base. Seeking a junior software developer position to
            apply my skills and contribute to innovative projects.
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
