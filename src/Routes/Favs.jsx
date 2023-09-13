import React from "react";
import Card from "../Components/Card";
import { useFavoritesContext } from "../Components/utils/favorites.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favorites } = useFavoritesContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map(card => (
          <Card key={card.id} id={card.id} name={card.name} username={card.username} />
        ))}
      </div>
    </>
  );
};

export default Favs;
