import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTheme, ThemeProvider, themes } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <nav className="">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/detail">Detail</Link> 
        </li>
        <li>
          <Link to="/favs">Favs</Link> 
        </li>
        <li>
          <Link to="/contact">Contact</Link> 
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} style={{background: themes.background, color:themes.font}}>
        Change theme 
      </button>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar