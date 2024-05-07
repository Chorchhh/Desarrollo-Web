import React from "react";
import classes from "./button.module.css";

const MyButton = ({ onClickHander, label }) => {
  const buttonStyles = {
    Add: { backgroundColor: "green" },
    Subtract: { backgroundColor: "red" },
    Clear: { backgroundColor: "orange" },
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
