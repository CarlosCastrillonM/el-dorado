import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AerolineasForm from './AerolineasForm';
import ListadoAerolíneas from './ListadoAerolíneas';
import VuelosForm from './VuelosForm';
import './forms.css';
import fondo from '../../assets/img/fondo.jpg';

const AeropuertoForm = () => {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [aerolineas, setAerolineas] = useState([]);
  const [pasoActual, setPasoActual] = useState(1);
  const [aerolineaSeleccionada, setAerolineaSeleccionada] = useState(null); // Aerolínea seleccionada

  const navigate = useNavigate();  // Usamos el hook de navegación

  // Cargar aerolíneas desde localStorage al inicio
  useEffect(() => {
    const storedAirlines = JSON.parse(localStorage.getItem('aerolineas'));
    if (storedAirlines) {
      setAerolineas(storedAirlines);
    }
  }, []);

  // Función para agregar una nueva aerolínea
  const agregarAerolinea = (aerolinea) => {
    const updatedAirlines = [...aerolineas, aerolinea];
    setAerolineas(updatedAirlines);
    localStorage.setItem('aerolineas', JSON.stringify(updatedAirlines));
  };

  // Función para agregar un vuelo a la aerolínea seleccionada
  const agregarVuelo = (vuelo) => {
    const updatedAirlines = aerolineas.map(aerolinea =>
      aerolinea === aerolineaSeleccionada
        ? { ...aerolinea, vuelos: [...aerolinea.vuelos || [], vuelo] }
        : aerolinea
    );
    setAerolineas(updatedAirlines);
    localStorage.setItem('aerolineas', JSON.stringify(updatedAirlines));
  };

  // Función de finalización, guarda los datos y redirige al inicio del formulario de aeropuertos
  const finalizarFormulario = () => {
    localStorage.setItem('aerolineas', JSON.stringify(aerolineas)); // Guardar aerolíneas
    setPasoActual(1); // Asegura que volvemos al primer paso
  };

  // Función para manejar el botón de agregar vuelos
  const manejarAgregarVuelos = () => {
    if (aerolineaSeleccionada) {
      navigate('/vuelos');  // Redirige al formulario de vuelos
    } else {
      alert('Debe seleccionar una aerolínea primero.');
    }
  };

  // Renderizar cada paso del formulario
  const renderizarPaso = () => {
    switch (pasoActual) {
      case 1:
        return (
          <>
            <h2>Formulario de Aeropuerto</h2>
            <form>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre del Aeropuerto"
                />
              </div>
              <div>
                <label>Ciudad:</label>
                <input
                  type="text"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  placeholder="Ciudad"
                />
              </div>
              <div>
                <label>País:</label>
                <input
                  type="text"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  placeholder="País"
                />
              </div>
              <div className="button-container">
                <button type="button" onClick={() => setPasoActual(2)}>Siguiente</button>
              </div>
            </form>
          </>
        );
      case 2:
        return (
          <>
            <h2>Registro de Aerolíneas</h2>
            <AerolineasForm agregarAerolinea={agregarAerolinea} pasoAnterior={() => setPasoActual(1)} />
            <div className="button-container">
              <button type="button" onClick={() => setPasoActual(1)}>Anterior</button>
              <button type="button" onClick={() => setPasoActual(3)}>Siguiente</button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2>Listado de Aerolíneas</h2>
            <ListadoAerolíneas
              aerolineas={aerolineas}
              setAerolineas={setAerolineas} 
              seleccionarAerolinea={setAerolineaSeleccionada} // Guardar la aerolínea seleccionada
            />
            <div className="button-container">
              <button type="button" onClick={() => setPasoActual(2)}>Anterior</button>
              {/* Botón de "Finalizar", habilitado solo si una aerolínea está seleccionada */}
              <button 
                type="button" 
                onClick={finalizarFormulario}
                disabled={!aerolineaSeleccionada} // Deshabilitado si no hay selección
              >
                Finalizar
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2>Registro de Vuelos</h2>
            {aerolineaSeleccionada && (
              <VuelosForm agregarVuelo={agregarVuelo} aerolineaSeleccionada={aerolineaSeleccionada} />
            )}
            <div className="button-container">
              <button type="button" onClick={() => setPasoActual(3)}>Anterior</button>
              {/* Botón de "Agregar vuelos" */}
              <button type="button" onClick={manejarAgregarVuelos}>
                Agregar vuelos
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-main" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="form-container">
        {renderizarPaso()}
      </div>
    </div>
  );
};

export default AeropuertoForm;
