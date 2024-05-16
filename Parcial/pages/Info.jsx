import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";

const Info = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchInfo(id);
  }, [id]);

  const fetchInfo = async (id) => {
    try {
      const response = await fetch(`api/games/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener los detalles del deporte");
      }
      const data = await response.json();
      setGame(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="detalles">
      <h1>Detalles del Deporte</h1>
      {sport ? (
        <div>
          <Info
            title={game.title}
            description={game.description}
            players={game.players}
            category={game.categories}
          />
          <Link to="/">Volver al Inicio</Link>
        </div>
      ) : (
        <p>Espere</p>
      )}
    </div>
  );
};

export default SportDetailsPage;
