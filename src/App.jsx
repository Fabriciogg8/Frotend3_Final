import React , { useContext, useState }from "react";

import { useTheme, ThemeProvider, themes } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {

  const { theme, toggleTheme } = useTheme();
  
  
  return (
    
                              
      <div className={`App ${theme === themes.dark ? 'dark' : ''}`} > 
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:dentistaId" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </div>
     
    
  );
}

export default App;

// style={{background: themes.background, color:themes.font}}