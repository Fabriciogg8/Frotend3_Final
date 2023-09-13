import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const [dentista, setDentista] = useState(null); 
  const { dentistaId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistaId}`)
      .then((response) => response.json())
      .then((data) => {
        setDentista(data); // Actualizar el estado con los datos del dentista
      })
      .catch((error) => {
        console.error("Error al obtener el dentista");
      });
  }, [dentistaId]);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aquí deberán renderizar la información en detalle de un user en específico */}
      {/* Deberán mostrar el name - email - phone - website por cada user en específico */}
      {dentista ? (
        <div>
          <p>ID: {dentista.id}</p>
          <p>Nombre: {dentista.name}</p>
          <p>Nombre de usuario: {dentista.username}</p>
          {/* Mostrar otros detalles del dentista */}
          <p>Email: {dentista.email}</p>
          <p>Website: {dentista.website}</p>
          <p>Phone: {dentista.phone}</p>
        </div>) : (
        <p>Cargando información del dentista...</p>
      )}
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
};

export default Detail;