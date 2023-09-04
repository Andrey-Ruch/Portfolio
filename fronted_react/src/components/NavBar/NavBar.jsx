import React, { useState, useRef, useEffect } from "react";
import { images } from "../../constants";
import Social from "../Social/Social";
import "./NavBar.scss";

const NavBar = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const [menuVisible, setMenuVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("selectedTheme") || "dark"
  );

  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavLinkClick = (item) => (e) => {
    e.preventDefault();
    scrollToElement(item);
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  const updateMode = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <nav className="app__navbar" ref={navbarRef}>
      <div className="app__navbar-container app__flex">
        <div className="app__navbar-logo">
          {/* <a href="#Home">[ae]</a> */}
          <a href="#Home" className="app__flex">
            <img src={images.logo} alt="logo" href="#Home" />
          </a>
        </div>

        <ul className="app__navbar-links">
          {navLinks.map((item) => (
            <li className="app__flex" key={`link-${item}`}>
              <a href={`#${item}`} onClick={handleNavLinkClick(item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <Social />

        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() => updateMode(theme === "dark" ? "light" : "dark")}
          />
          <span className="slider"></span>
        </label>

        <div className="app__navbar-burger">
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              checked={menuVisible}
              id="burger"
              onChange={toggleMenu}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={`menu ${menuVisible ? "visible" : "hidden"}`}>
          <ul>
            {navLinks.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={handleNavLinkClick(item)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <Social classNames="menu-social" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
