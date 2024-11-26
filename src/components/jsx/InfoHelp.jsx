import React from 'react';
import '../css/InfoHelp.css'; // Make sure to create a CSS file for custom styles

const InfoHelp = () => {
  return (
<div className="info-ayuda-container">
      <h1>Información y Ayuda - El Dorado</h1>

      <section className="section">
        <h2>Información General</h2>
        <p>
          Bienvenido a El Dorado, tu aerolínea de confianza. En nuestro sitio web, puedes encontrar diferentes opciones de vuelos nacionales e internacionales, así como realizar tus reservaciones de manera fácil y rápida. Nuestro objetivo es ofrecerte una experiencia de viaje cómoda y segura.
        </p>
      </section>

      <section className="section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq">
          <h3>¿Cómo puedo reservar un vuelo?</h3>
          <p>
            Puedes reservar un vuelo visitando la sección de "Reservar" en nuestro menú principal. Ingresa la ciudad de origen, destino, fechas de viaje y número de pasajeros para obtener los resultados disponibles.
          </p>

          <h3>¿Cómo puedo revisar el estado de mi reserva?</h3>
          <p>
            Ve a la sección "Tu reserva" en el menú principal e ingresa el código de reserva y tu apellido para ver el estado actual de tu vuelo.
          </p>

          <h3>¿Cómo puedo hacer el check-in en línea?</h3>
          <p>
            El check-in en línea está disponible 24 horas antes de la salida de tu vuelo. Simplemente haz clic en "Check-in" en nuestro menú y sigue las instrucciones.
          </p>

          <h3>¿Qué puedo llevar en mi equipaje?</h3>
          <p>
            Puedes llevar una maleta de mano y una pieza de equipaje facturado según las políticas de equipaje de El Dorado. Consulta la sección de equipaje en la sección "Información General" para más detalles.
          </p>
        </div>
      </section>

      <section className="section" id="contacto">
        <h2>Contacto</h2>
        <p>
          Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos:
        </p>
        <ul>
          <li>Teléfono: +57 1 8000 123 456</li>
          <li>Email: soporte@eldorado.com</li>
          <li>Dirección: Calle 123, Bogotá, Colombia</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoHelp;
