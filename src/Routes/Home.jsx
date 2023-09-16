import React from 'react';
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context'; 
import "../Stylesheets/home.css"

const Home = () => {
  // Uso el hook useGlobalContext para obtener los dentistas del contexto
  const { dentistas } = useGlobalContext();

  return (
    <main className="main">
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Mapeamos los dentistas y renderizamos las tarjetas */}
        {dentistas.map((dentista) => (
          <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;