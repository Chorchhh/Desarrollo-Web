import React from "react";
import classes from "./button.module.css";

const MyButton = ({ onClickHander, label }) => {
  const buttonStyles = {
    Mayor: { backgroundColor: "green" },
    Menor: { backgroundColor: "red" },
    Igual: { backgroundColor: "orange" },
  };
  const buttonClick = () => {
    onClickHander();
  };

  return (
    <button
      className={classes.cajas}
      style={buttonStyles[label]}
      onClick={buttonClick}
    >
      {label}
    </button>
  );
};

export default MyButton;
