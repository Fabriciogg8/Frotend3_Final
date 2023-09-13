import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context'; // Importa el hook del contexto

const Detail = () => {
  const { dentistas } = useGlobalContext(); // Obtén los dentistas del contexto global
  const { dentistaId } = useParams();

  // Encuentra el dentista específico en función del ID
  const dentista = dentistas.find((dentista) => dentista.id === parseInt(dentistaId));

  return (
    <>
      <h1>Detail Dentist id {dentistaId}</h1>
      {dentista ? (
        <div>
          <p>ID: {dentista.id}</p>
          <p>Nombre: {dentista.name}</p>
          <p>Nombre de usuario: {dentista.username}</p>
          <p>Email: {dentista.email}</p>
          <p>Website: {dentista.website}</p>
          <p>Phone: {dentista.phone}</p>
        </div>
      ) : (
        <p>Cargando información del dentista...</p>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
    </>
  );
};

export default Detail;