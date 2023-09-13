import React from 'react';
import { useTheme } from '../Components/utils/global.context'; // Importa el hook del contexto de tema

const ThemeButton = () => {
  // Usamos el hook useTheme para obtener el tema y toggleTheme desde el contexto de tema
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-button">
      Toggle Theme
    </button>
  );
};

export default ThemeButton;