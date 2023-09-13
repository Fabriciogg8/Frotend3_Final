import React, { createContext, useContext, useReducer } from 'react';

// Reducer para gestionar el estado de tarjetas destacadas
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.card];
    case 'REMOVE_FAVORITE':
      return state.filter(card => card.id !== action.card.id);
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

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}