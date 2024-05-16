import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Info = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/games");
      if (!response.ok) {
        throw new Error("Error al obtener la lista de deportes");
      }
      const data = await response.json();
      setGame(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Info">
      <h1>Lista de Deportes</h1>
      <div className="Lista">
        {game.map((game) => (
          <Link key={game.id} to={`http://localhost:3000/api/games/${game.id}`}>
            <SportCard
              title={game.title}
              description={game.description}
              players={game.players}
              category={game.categories}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaginaPrincipal;
