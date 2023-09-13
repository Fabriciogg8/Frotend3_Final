import React, { useContext } from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import {ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const[dentistas, setDentistas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>(
      setDentistas(data)
    ))
    .catch((error)=>{
      console.error("Error al obtener los dentistas");
    })
  },[]);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentistas)=> <Card key={dentistas.id} name={dentistas.name} username={dentistas.username} id={dentistas.id}/>)}
      </div>
    </main>
  )
}

export default Home