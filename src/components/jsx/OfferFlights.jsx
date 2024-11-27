import React from 'react';
import '../css/OfferFlights.css'; // Asegúrate de crear este archivo CSS

const flights = [
  {
    origen: 'Bogotá',
    destino: 'Cartagena',
    salida: '2024-12-01',
    llegada: '2024-12-01',
    capacidad: '150 pasajeros',
    imagen: '/assets/img/img1.jpg'
  },
  {
    origen: 'Medellín',
    destino: 'San Andrés',
    salida: '2024-12-05',
    llegada: '2024-12-05',
    capacidad: '120 pasajeros',
    imagen: '/assets/img/img2.jpeg'
  },
  {
    origen: 'Cali',
    destino: 'Miami',
    salida: '2024-12-10',
    llegada: '2024-12-10',
    capacidad: '180 pasajeros',
    imagen: '/assets/img/img3.jpeg'
  },
  {
    origen: 'Bogotá',
    destino: 'Nueva York',
    salida: '2024-12-15',
    llegada: '2024-12-15',
    capacidad: '200 pasajeros',
    imagen: '/assets/img/img4.jpg'
  },
  {
    origen: 'Manizales',
    destino: 'Valledupar',
    salida: '2024-12-15',
    llegada: '2024-12-15',
    capacidad: '180 pasajeros',
    imagen: '/assets/img/img5.jpeg'
  },
  {
    origen: 'Santa Marta',
    destino: 'Venecia',
    salida: '2024-08-11',
    llegada: '2024-18-11',
    capacidad: '200 pasajeros',
    imagen: '/assets/img/img6.jpg'
  },
  // Agrega más vuelos según sea necesario
];

const OfferFlights = () => {
  return (
    <div className="ofertas-container">
      <h1>Ofertas y Destinos</h1>
      <div className="vuelos-grid">
        {flights.map((vuelo, index) => (
          <div key={index} className="vuelo-card">
            <h2>{vuelo.origen} ➔ {vuelo.destino}</h2>
            <img src={vuelo.imagen} alt={`${vuelo.destino}`} className="vuelo-imagen" />
            <p><strong>Fecha de salida:</strong> {vuelo.salida}</p>
            <p><strong>Fecha de llegada:</strong> {vuelo.llegada}</p>
            <p><strong>Capacidad:</strong> {vuelo.capacidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferFlights;
