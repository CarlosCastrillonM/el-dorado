import React, { useState } from 'react';
import './forms.css';

const AerolineasForm = ({ agregarAerolinea }) => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [origen, setOrigen] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre && codigo && origen) {
      agregarAerolinea({ nombre, codigo, origen });
      setNombre(''); // Limpiar el campo de nombre
      setCodigo(''); // Limpiar el campo de código
      setOrigen(''); // Limpiar el campo de origen
    }
  };

  return (
    <div className="aerolineas-form">
      <h3>Añadir Aerolíneas</h3>
      <form onSubmit={manejarSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Aerolínea XYZ"
          />
        </div>
        <div>
          <label>Código:</label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Ej: XYZ123"
          />
        </div>
        <div>
          <label>Origen:</label>
          <input
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            placeholder="Ej: Ciudad de México"
          />
        </div>
        <div className="button-container">
          <button type="submit">Agregar Aerolínea</button>
        </div>
      </form>
    </div>
  );
};

export default AerolineasForm;