import React, { createContext, useContext, useState } from 'react';

export const themes = {
  light: {
    font: 'black',
    background: 'white',
  },
  dark: {
    font: 'white',
    background: 'black',
  },
};

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
 
// export const ContextProvider = ({ children }) => {
//   // Use state para gestionar el tema
//   const [theme, setTheme] = useState(themes.light);
  
//   // Función para alternar el tema
//   const handleChangeTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };
  
//   //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
//  const providerValue = useMemo(()=>({ theme, handleChangeTheme}),
//  [theme,handleChangeTheme] )

//   return <ContextGlobal.Provider value={providerValue}>{children}</ContextGlobal.Provider>;
// };

