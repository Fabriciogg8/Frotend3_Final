import React, { useState } from "react";
import "../Stylesheets/form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length < 5) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    // Validación de formato de correo electrónico usando una expresión regular 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    // Si las validaciones pasan, muestro el mensaje de éxito
    setError("");
    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit}>
    <div>
      <label className="form-label" htmlFor="fullName">
        Nombre completo:
      </label>
      <input
        className="form-input"
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </div>
    <button className="form-button" type="submit">
      Enviar
    </button>
  </form>
  {error && <p className="form-error">{error}</p>}
  {successMessage && <p className="form-success">{successMessage}</p>}
</div>
  );
};

export default Form;