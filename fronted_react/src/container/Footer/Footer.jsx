import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import Social from "../../components/Social/Social";
import Form from "../../components/Form/Form";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__footer-container">
      <h1 className="head-text">
        <span>Find me here!</span>
      </h1>

      <Social classNames="footer-social" />

      <Form />
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
