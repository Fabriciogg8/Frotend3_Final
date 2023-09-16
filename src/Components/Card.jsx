import React from "react";
import { Link } from "react-router-dom";
import { useFavoritesContext } from '../Components/utils/favorites.context';
import patientImage from '../images/doctor.jpg';
import "../Stylesheets/card.css"

const Card = ({ name, username, id }) => {
  const { favorites, dispatch } = useFavoritesContext();

  const isFavorite = favorites.some(card => card.id === id);

  const addFav = () => {
    // Aca la logica para agregar la Card en el localStorage
    if (isFavorite) {
      // Si ya es favorito, eliminarlo
      dispatch({ type: 'REMOVE_FAVORITE', card: { id, name, username } });
    } else {
      // Si no es favorito, agregarlo
      dispatch({ type: 'ADD_FAVORITE', card: { id, name, username } });
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`detail/${id}`} key={id}>
        <img src={patientImage} alt={`Patient ${id}`} />
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={`favButton ${isFavorite ? 'favActive' : ''}`}>
        {isFavorite ? 'Remove fav' : 'Add fav'}
      </button>
    </div>
  );
};

export default Card;
