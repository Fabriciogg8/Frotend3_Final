import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context"; 
import "../Stylesheets/detail.css"

const Detail = () => {
  const { dentistas } = useGlobalContext(); // Obténgo los dentistas del contexto global
  const { dentistaId } = useParams();

  // Encuentra el dentista específico en función del ID
  const dentista = dentistas.find(
    (dentista) => dentista.id === parseInt(dentistaId)
  );

  return (
    <div className="detail-container">
      <h1 className="detail-title">Detail Dentist id {dentistaId}</h1>
      {dentista ? (
        <div>
          <p className="detail-paragraph">ID: {dentista.id}</p>
          <p className="detail-paragraph">Name: {dentista.name}</p>
          <p className="detail-paragraph">
            Username: {dentista.username}
          </p>
          <p className="detail-paragraph">Email: {dentista.email}</p>
          <p className="detail-paragraph">Website: {dentista.website}</p>
          <p className="detail-paragraph">Phone: {dentista.phone}</p>
        </div>
      ) : (
        <p className="detail-paragraph">Cargando información del dentista...</p>
      )}
      <button className="detail-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default Detail;
