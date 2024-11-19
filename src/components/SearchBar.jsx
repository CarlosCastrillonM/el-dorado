import React, { useState } from 'react';
import PassengerSelector from './PassengerSelector'; // Importar el componente de selección de pasajeros
import './SearchBar.css'; // Asegúrate de tener el CSS actualizado

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(true); 
  const [passengerCount, setPassengerCount] = useState(1); // Estado para el número de pasajeros
  const [isPassengerSelectorVisible, setPassengerSelectorVisible] = useState(false); // Para mostrar/ocultar el selector

  // Función para manejar el tipo de viaje
  const handleTripTypeChange = (event) => {
    const tripType = event.target.value;
    setIsRoundTrip(tripType === 'ida-y-vuelta');
  };

  // Función para abrir o cerrar el selector de pasajeros
  const togglePassengerSelector = () => {
    setPassengerSelectorVisible(!isPassengerSelectorVisible);
  };

  // Función para manejar la confirmación de los pasajeros
  const handlePassengerConfirm = (passengers) => {
    const totalPassengers = passengers.adults + passengers.teens + passengers.children + passengers.infants;
    setPassengerCount(totalPassengers); // Actualizar el contador con el total de pasajeros
    setPassengerSelectorVisible(false); // Cerrar el selector después de confirmar
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        {/* Tipo de viaje: ida y vuelta o solo ida */}
        <div className="trip-type-group">
          <label className="trip-type-option">
            <input 
              type="radio" 
              name="trip-type" 
              value="ida-y-vuelta" 
              checked={isRoundTrip} 
              onChange={handleTripTypeChange} 
            />
            Ida y vuelta
          </label>
          <label className="trip-type-option">
            <input 
              type="radio" 
              name="trip-type" 
              value="solo-ida" 
              checked={!isRoundTrip} 
              onChange={handleTripTypeChange} 
            />
            Solo ida
          </label>
        </div>

        {/* Inputs de origen y destino con iconos */}
        <div className="input-group">
          <div className="input-item">
            <span className="icon">✈️</span>
            <input 
              type="text" 
              placeholder="Origen" 
              value={origin} 
              onChange={(e) => setOrigin(e.target.value)} 
            />
          </div>
          <div className="input-item">
            <span className="icon">✈️</span>
            <input 
              type="text" 
              placeholder="Destino" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
            />
          </div>
          <div className="input-item">
            <span className="icon">📅</span>
            <input type="date" placeholder="Ida" />
          </div>
          {isRoundTrip && (
            <div className="input-item">
              <span className="icon">📅</span>
              <input type="date" placeholder="Vuelta" />
            </div>
          )}
        </div>

        {/* Botón para seleccionar pasajeros */}
        <div className="passenger-section">
          <button className="passenger-btn" onClick={togglePassengerSelector}>
            <span className="icon">👥</span> {passengerCount} Pasajero{passengerCount > 1 ? 's' : ''}
          </button>
          {/* Renderizar el selector de pasajeros si es visible */}
          {isPassengerSelectorVisible && (
            <PassengerSelector onConfirm={handlePassengerConfirm} />
          )}
        </div>

        {/* Botón de búsqueda */}
        <button className="search-btn">Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
