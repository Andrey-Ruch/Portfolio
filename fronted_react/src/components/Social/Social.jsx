import React from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import "./Social.scss";

const Social = ({ classNames }) => {
  return (
    <div className={`app__navbar-social ${classNames}`}>
      <a
        href="https://github.com/Andrey-Ruch"
        target="_blank"
        rel="noopener noreferrer"
        className="github app__flex"
      >
        <BiLogoGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/andreyruch"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin app__flex"
      >
        <BiLogoLinkedin />
      </a>

      <a
        href="mailto:andreyruch1@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="gmail app__flex"
      >
        <BiLogoGmail />
      </a>
    </div>
  );
};

export default Social;
