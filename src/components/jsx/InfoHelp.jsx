import React from 'react';
import '../css/InfoHelp.css'; // Make sure to create a CSS file for custom styles

const InfoHelp = () => {
  return (
    <div className="info-ayuda-container">
      <h1>Information and Help - El Dorado</h1>

      <section className="section">
        <h2>General Information</h2>
        <p>
          Welcome to El Dorado, your trusted airline. On our website, you can find a variety of national and international flight options, as well as make your reservations easily and quickly. Our goal is to provide you with a comfortable and safe travel experience.
        </p>
      </section>

      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>How can I book a flight?</h3>
          <p>
            You can book a flight by visiting the "Book" section in our main menu. Enter the departure city, destination, travel dates, and number of passengers to get the available results.
          </p>

          <h3>How can I check the status of my reservation?</h3>
          <p>
            Go to the "Your Reservation" section in the main menu and enter the reservation code and your last name to see the current status of your flight.
          </p>

          <h3>How can I check-in online?</h3>
          <p>
            Online check-in is available 24 hours before your flight departure. Simply click "Check-in" in our menu and follow the instructions.
          </p>

          <h3>What can I bring in my luggage?</h3>
          <p>
            You can bring one carry-on bag and one checked luggage item according to El Dorado's baggage policies. Please check the baggage section in the "General Information" section for more details.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          If you have any questions or need additional assistance, please don't hesitate to contact us:
        </p>
        <ul>
          <li>Phone: +57 1 8000 123 456</li>
          <li>Email: support@eldorado.com</li>
          <li>Address: Calle 123, Bogotá, Colombia</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoHelp;
