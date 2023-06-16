import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
// import About from "../InfoSection/index.js";

const DarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function getInitialTheme() {
    const userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return userPreference ? "dark-theme" : "light-theme";
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark-theme"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
      {/* <About theme={theme} /> */}
    </div>
  );
};

export default DarkMode;
