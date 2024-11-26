import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LisAerolineas.css';

const ListadoAerolíneas = ({ aerolineas, setAerolineas }) => {
  const navigate = useNavigate(); // Hook para navegación
  const [seleccionada, setSeleccionada] = useState(null); // Estado para manejar la aerolínea seleccionada

  const eliminarAerolinea = (codigo) => {
    // Filtra la lista de aerolíneas eliminando la seleccionada
    const updatedAirlines = aerolineas.filter(aerolinea => aerolinea.codigo !== codigo);
    setAerolineas(updatedAirlines); // Actualiza el estado con la nueva lista
    localStorage.setItem('aerolineas', JSON.stringify(updatedAirlines)); // Guarda en localStorage
  };

  const handleSeleccionarAerolinea = (aerolinea) => {
    setSeleccionada(aerolinea === seleccionada ? null : aerolinea); // Alterna la selección de la aerolínea
  };

  const handleAgregarVuelos = () => {
    if (seleccionada) {
      navigate('/vuelos');  // Redirige al formulario de vuelos si hay una aerolínea seleccionada
    } else {
      alert('Debe seleccionar una aerolínea primero.');  // Si no se selecciona una aerolínea
    }
  };

  return (
    <div className="aerolineas-container">
      {aerolineas.length === 0 ? (
        <p>No hay aerolíneas agregadas.</p>
      ) : (
        <ul className="aerolineas-list">
          {aerolineas.map((aerolinea) => (
            <li
              key={aerolinea.codigo}
              className={`aerolinea-card ${seleccionada && seleccionada.codigo === aerolinea.codigo ? 'seleccionada' : ''}`}
            >
              <div className="aerolinea-info">
                <h3>{aerolinea.nombre} ({aerolinea.codigo})</h3>
                <p>Origen: {aerolinea.origen}</p>
              </div>
              <div className="aerolinea-actions">
                <button
                  className="boton-seleccionar"
                  onClick={() => handleSeleccionarAerolinea(aerolinea)}
                >
                  {seleccionada && seleccionada.codigo === aerolinea.codigo ? 'Desmarcar' : 'Seleccionar'}
                </button>
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarAerolinea(aerolinea.codigo)}
                  aria-label={`Eliminar aerolínea ${aerolinea.nombre}`}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* El botón de "Agregar vuelos" solo aparece cuando una aerolínea está seleccionada */}
      {seleccionada && (
        <button
          className="boton-agregar-vuelos"
          onClick={handleAgregarVuelos}
        >
          Agregar vuelos
        </button>
      )}
    </div>
  );
};

export default ListadoAerolíneas;
