import React, { Children } from "react";

const Card = ({ id, title, description, players, categories }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>
        <strong>Descripción:</strong> {description}
      </p>
      <p>
        <strong>Players:</strong> {players}
      </p>
      <p>
        <strong>Category:</strong> {categories}
      </p>
      {Children}
    </div>
  );
};

export default Card;
