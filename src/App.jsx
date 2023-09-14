import React from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Layout from "./Components/Layout";

function App() {
  
  return (              
    <Layout>
      <Navbar /> 
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:dentistaId" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
    <Footer />
  </Layout>
  );
}

export default App;

