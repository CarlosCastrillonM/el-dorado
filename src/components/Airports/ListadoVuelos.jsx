import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaVuelos.css';

const ListadoVuelos = () => {
  const navigate = useNavigate(); // Hook para navegación

  // Estado local de vuelos
  const [vuelos, setVuelos] = useState([
    { codigo: 1, nombre: 'Vuelo 101', origen: 'Bogotá', destino: 'Nueva York', horario: '10:00 AM' },
    { codigo: 2, nombre: 'Vuelo 202', origen: 'Ciudad de México', destino: 'Los Ángeles', horario: '1:00 PM' },
    { codigo: 3, nombre: 'Vuelo 303', origen: 'Lima', destino: 'Miami', horario: '3:30 PM' },
  ]);

  const [seleccionado, setSeleccionado] = useState(null); // Estado para manejar el vuelo seleccionado

  const eliminarVuelo = (codigo) => {
    const updatedVuelos = vuelos.filter((vuelo) => vuelo.codigo !== codigo);
    setVuelos(updatedVuelos); // Actualiza el estado con la nueva lista
    localStorage.setItem('vuelos', JSON.stringify(updatedVuelos)); // Guarda en localStorage
  };

  const handleSeleccionarVuelo = (vuelo) => {
    setSeleccionado(vuelo === seleccionado ? null : vuelo); // Alterna la selección del vuelo
  };

  const handleAgregarDetalles = () => {
    if (seleccionado) {
      navigate('/detalles-vuelo'); // Redirige al formulario de detalles si hay un vuelo seleccionado
    } else {
      alert('Debe seleccionar un vuelo primero.'); // Si no se selecciona un vuelo
    }
  };

  return (
    <div className="vuelos-container">
      {vuelos.length === 0 ? (
        <p>No hay vuelos disponibles.</p>
      ) : (
        <ul className="vuelos-list">
          {vuelos.map((vuelo) => (
            <li
              key={vuelo.codigo}
              className={`vuelo-card ${seleccionado && seleccionado.codigo === vuelo.codigo ? 'seleccionado' : ''}`}
            >
              <div className="vuelo-info">
                <h3>{vuelo.nombre} ({vuelo.codigo})</h3>
                <p>Origen: {vuelo.origen}</p>
                <p>Destino: {vuelo.destino}</p>
                <p>Horario: {vuelo.horario}</p>
              </div>
              <div className="vuelo-actions">
                <button
                  className="boton-seleccionar"
                  onClick={() => handleSeleccionarVuelo(vuelo)}
                >
                  {seleccionado && seleccionado.codigo === vuelo.codigo ? 'Desmarcar' : 'Seleccionar'}
                </button>
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarVuelo(vuelo.codigo)}
                  aria-label={`Eliminar vuelo ${vuelo.nombre}`}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Botón de "Agregar detalles" solo aparece cuando un vuelo está seleccionado */}
      {seleccionado && (
        <button
          className="boton-agregar-detalles"
          onClick={handleAgregarDetalles}
        >
          Agregar detalles del vuelo
        </button>
      )}
    </div>
  );
};

export default ListadoVuelos;
