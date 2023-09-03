import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="app__header">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <h2>
        Hello,
        <br /> I'm Andrey <br />
        <span>Software Engineer</span>
      </h2>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.75, delayChildren: 0.5 }}
      className="app__header-image"
    >
      <img src={images.profile} alt="Profile" />
    </motion.div>
  </div>
);

export default AppWrap(Header, "Home");
