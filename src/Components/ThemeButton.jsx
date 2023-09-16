import React from 'react';
import { useTheme } from '../Components/utils/global.context'; // Importa el hook del contexto de tema
import '../Stylesheets/themeButton.css'

const ThemeButton = () => {
  // Uso el hook useTheme para obtener el tema y toggleTheme desde el contexto de tema
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-button">
      Toggle Theme
    </button>
  );
};

export default ThemeButton;