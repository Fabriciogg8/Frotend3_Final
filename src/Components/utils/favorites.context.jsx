import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Reducer para gestionar el estado de tarjetas destacadas
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.favorites;
    case 'ADD_FAVORITE':
      const newFavorites = [...state, action.card];
      localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Guardar en localStorage
      return newFavorites;
    case 'REMOVE_FAVORITE':
      const updatedFavorites = state.filter(card => card.id !== action.card.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Guardar en localStorage
      return updatedFavorites;
    default:
      return state;
  }
}

export const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  // Obtener favoritos del localStorage al cargar la página
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SET_FAVORITES', favorites: storedFavorites });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}