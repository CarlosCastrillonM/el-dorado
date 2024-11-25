import React, { useState, useEffect } from 'react';
import './VuelosForm.css'; // Importa el nuevo archivo CSS para el formulario de vuelos

const VuelosForm = ({ agregarVuelo }) => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [fechaLlegada, setFechaLlegada] = useState('');
  const [duracion, setDuracion] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [aerolineaSeleccionada, setAerolineaSeleccionada] = useState(null);

  // Cargar la aerolínea desde localStorage cuando el componente se monta
  useEffect(() => {
    const aerolinea = JSON.parse(localStorage.getItem('aerolineaSeleccionada'));
    if (aerolinea) {
      setAerolineaSeleccionada(aerolinea);
    }
  }, []); // Esto se ejecuta solo una vez cuando el componente se monta

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (aerolineaSeleccionada) {
      // Llamar a la función agregarVuelo que se pasa como prop, si está definida
      agregarVuelo({ origen, destino, fechaSalida, fechaLlegada, duracion, capacidad }, aerolineaSeleccionada);
    }
    // Limpiar los campos después de agregar el vuelo
    setOrigen('');
    setDestino('');
    setFechaSalida('');
    setFechaLlegada('');
    setDuracion('');
    setCapacidad('');
  };

  return (
    <div className="vuelos-form-container">
      <h3>Agregar Vuelo a {aerolineaSeleccionada ? aerolineaSeleccionada.nombre : 'Seleccionar Aerolínea'}</h3>
      {aerolineaSeleccionada && (
        <div className="aerolinea-seleccionada">
          {aerolineaSeleccionada.nombre} ({aerolineaSeleccionada.codigo})
        </div>
      )}
      <form onSubmit={manejarSubmit} className="vuelos-form">
        <div className="form-group">
          <label>Origen:</label>
          <input
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            placeholder="Ej: Madrid"
          />
        </div>
        <div className="form-group">
          <label>Destino:</label>
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Ej: Barcelona"
          />
        </div>
        <div className="form-group">
          <label>Fecha de Salida:</label>
          <input
            type="date"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Fecha de Llegada:</label>
          <input
            type="date"
            value={fechaLlegada}
            onChange={(e) => setFechaLlegada(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duración:</label>
          <input
            type="text"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            placeholder="Ej: 2h 30m"
          />
        </div>
        <div className="form-group">
          <label>Capacidad:</label>
          <input
            type="number"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            placeholder="Ej: 150"
          />
        </div>
        <button type="submit" className="submit-btn">Agregar Vuelo</button>
      </form>
    </div>
  );
};

export default VuelosForm;
