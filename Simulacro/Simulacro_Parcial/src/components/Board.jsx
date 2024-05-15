import React from "react";
import List from "./List";

const Board = () => {
  return (
    <div className="board">
      <h1>Tablero</h1>
      <List></List>
      <List></List>
      <List></List>
    </div>
  );
};

export default Board;
