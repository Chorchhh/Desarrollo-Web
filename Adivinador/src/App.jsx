import React, { useState } from "react";
import MyButton from "./Components/myButton";
import "./styles.css";

export default function App() {
  const labels = ["Mayor", "Menor", "Igual"];
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [maxNumber, setMaxNumber] = useState(100);
  const [minNumber, setMinNumber] = useState(0);

  const handleMayor = () => {
    setMinNumber(randomNumber + 1);
    const newRandomNumber = Math.floor(
      Math.random() * (maxNumber - (randomNumber + 1)) + (randomNumber + 1)
    );
    setRandomNumber(newRandomNumber);
  };
  const handleMenor = () => {
    setMaxNumber(randomNumber - 1);
    const newRandomNumber = Math.floor(
      Math.random() * (randomNumber - 1 - minNumber) + minNumber
    );
    setRandomNumber(newRandomNumber);
  };
  const handleIgual = () => {
    alert("U win");
  };
  return (
    <div className="App">
      <h1>Adivinador</h1>
      <p>Number is: {randomNumber}</p>
      <MyButton label="Mayor" onClickHander={handleMayor} />
      <MyButton label="Menor" onClickHander={handleMenor} />
      <MyButton label="Igual" onClickHander={handleIgual} />
    </div>
  );
}
