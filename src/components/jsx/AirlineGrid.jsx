import React, { useEffect, useState } from 'react';
import { AirlineService } from '../../services/AirlineService'; // Asegúrate de que la ruta esté correcta
import '../css/AirlineGrid.css';

const AirlineGrid = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    const airlineService = new AirlineService();
    
    // Obtener todas las aerolíneas al cargar el componente
    airlineService.getAll().then(data => {
      setAirlines(data);
    }).catch(error => {
      console.error('Error al obtener las aerolíneas:', error);
    });
  }, []);

  return (
    <div className="airline-grid">
      {airlines.map((airline) => (
        <div key={airline.id} className="airline-card">
          <p><strong>Aerolínea:</strong> {airline.name}</p>
          <p><strong>ID:</strong> {airline.id}</p>
        </div>
      ))}
    </div>
  );
};

export default AirlineGrid;
