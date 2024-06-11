import React from "react";
import "./../../Styles/darkModeToggle.css";
import { useContext } from "react";
import { ThemeContext } from "/../Context/ThemeContext.jsx";

const Button = () => {
  const themeSettings = useContext(ThemeContext);

  return <button className={"primary-" + themeSettings.mode}>Click</button>;
};

export default Button;