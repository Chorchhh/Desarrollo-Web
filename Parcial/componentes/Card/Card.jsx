import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ id, title, description, players, categories }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>
        Descripción: {description}
      </p>
      <p>
        Players: {players}
      </p>
      <p>
        Category: {categories}
      </p>
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          navigate(`games/${id}`);
        }}
      >
        Ver Detalles
      </button>
    </div>
  );
};

export default Card;

