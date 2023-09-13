import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const GlobalContext = createContext(); // Nuevo contexto para los dentistas

export function useGlobalContext() {
  // Hook para usar el nuevo contexto
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  // Proveedor para el nuevo contexto
  const [theme, setTheme] = useState(themes.light);
  const [dentistas, setDentistas] = useState([]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    // Función para cargar los dentistas desde la API
    const loadDentistas = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los dentistas");
        }
        const data = await response.json();
        setDentistas(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDentistas();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [
    theme,
    toggleTheme,
  ]);

  const dentistasValue = useMemo(() => ({ dentistas }), [dentistas]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <GlobalContext.Provider value={dentistasValue}>
        {children}
      </GlobalContext.Provider>
    </ThemeContext.Provider>
  );
}