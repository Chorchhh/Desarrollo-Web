import React, { useState } from "react";
import MyButton from "./Components/myButton";
import "./styles.css";

export default function App() {
  const labels = ["Add", "Subtract", "Clear"];
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleClear = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Count is {count}</p>
      <MyButton label="Add" onClickHander={handleAdd} />
      <MyButton label="Subtract" onClickHander={handleSubtract} />
      <MyButton label="Clear" onClickHander={handleClear} />
    </div>
  );
}
