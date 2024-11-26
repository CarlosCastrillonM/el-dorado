import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import '../css/passengerSelector.css';

const PassengerGroup = ({ label, ageGroup, count, onIncrement, onDecrement }) => (
  <div className="passenger-group">
    <span>{label}</span>
    <small>{ageGroup}</small>
    <div className="counter">
      <button onClick={onDecrement} disabled={count === 0}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>
);

const PassengerSelector = ({ onConfirm }) => {
  const [passengers, setPassengers] = useState({
    adults: 0,
    teens: 0,
    children: 0,
    infants: 0,
  });

  const updatePassengerCount = (type, increment) => {
    setPassengers(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const handleConfirm = () => {
    onConfirm(passengers);
    console.log('Pasajeros confirmados:', passengers);
  };

  return (
    <div className="passenger-selector">
      <PassengerGroup 
        label="Adultos"
        count={passengers.adults} 
        onIncrement={() => updatePassengerCount('adults', true)} 
        onDecrement={() => updatePassengerCount('adults', false)} 
      />
      <PassengerGroup 
        label="Jóvenes" 
        count={passengers.teens} 
        onIncrement={() => updatePassengerCount('teens', true)} 
        onDecrement={() => updatePassengerCount('teens', false)} 
      />
      <PassengerGroup 
        label="Niños" 
        count={passengers.children} 
        onIncrement={() => updatePassengerCount('children', true)} 
        onDecrement={() => updatePassengerCount('children', false)} 
      />
      <PassengerGroup 
        label="Bebés" 
        count={passengers.infants} 
        onIncrement={() => updatePassengerCount('infants', true)} 
        onDecrement={() => updatePassengerCount('infants', false)} 
      />
      <button className="confirm-btn" onClick={handleConfirm}>Confirmar</button>
    </div>
  );
};

PassengerSelector.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default PassengerSelector;
