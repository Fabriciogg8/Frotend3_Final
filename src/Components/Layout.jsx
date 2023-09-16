import React, { useContext } from 'react';
import { ThemeContext } from '../Components/utils/global.context';
import "../Stylesheets/layout.css"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }} className='main-container'>
      {children}
    </div>
  );
};

export default Layout;