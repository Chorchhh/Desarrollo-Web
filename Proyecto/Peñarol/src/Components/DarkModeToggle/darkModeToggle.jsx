import React, { useContext } from "react";
import "./../../Styles/darkModeToggle.css";
import { ThemeContext } from "../../Context/themeContext";

const DarkModeToggle = () => {
  const themeSettings = useContext(ThemeContext);



  return (
    <div className="dark-mode-toggle">
      <p>Dark Mode</p>
      <button className={"primary-" + themeSettings.mode} onClick={themeSettings.switchMode}>
        {themeSettings.mode === "light" ? "On" : "Off"}
      </button>
    </div>
  );
}

export default DarkModeToggle;