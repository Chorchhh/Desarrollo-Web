  import React, { useState, useEffect } from "react";
  import Card from "../componentes/card/Card";
  import '../src/index.css'

  const PaginaPrincipal = () => {
    const [games, setGames] = useState([]);

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
        setGames(data);
        console.log(data)
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return (
      <div className="Info">
        <h1>Lista de Deportes</h1>
        <div>
          {games.map((game) => (
              <Card
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                players={game.players}
                categories={game.categories}
              />
          ))}
        </div>
      </div>
    );
  };

  export default PaginaPrincipal;
