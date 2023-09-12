import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const[dentista, setDentista] = useState({});
  const { dentistaId } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistaId}`)
    .then((response)=>response.json())
    .then((data)=>(
      setDentista(data)
    ))
    .catch((error)=>{
      console.error("Error al obtener los dentistas");
    })
  },[dentistaId]);

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentista ? (
        <div>
          <p>ID: {dentista.id}</p>
          <p>Nombre: {dentista.name}</p>
          <p>Nombre de usuario: {dentista.username}</p>
          {/* Mostrar otros detalles del dentista */}
          <p>Email: {dentista.email}</p>
          <p>Website: {dentista.website}</p>
          <p>Phone: {dentista.phone}</p>
        </div>
      ) : (
        <p>No se encontró información para el ID {dentistaId}</p>
      )}
      <button onClick={handleGoBack}>Go Back</button>
    </>
  )
}

export default Detail