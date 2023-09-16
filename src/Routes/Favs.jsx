import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useFavoritesContext } from "../Components/utils/favorites.context";
import "../Stylesheets/favs.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favorites, dispatch } = useFavoritesContext();

  // Obtengo las tarjetas destacadas del localStorage al cargar la página
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SET_FAVORITES', favorites: storedFavorites });
  }, [dispatch]);

  return (
    <main className="main-container">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map(card => (
          <Card className="card" key={card.id} id={card.id} name={card.name} username={card.username} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
