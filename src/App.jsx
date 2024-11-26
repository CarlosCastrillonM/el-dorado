import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAirlines from './components/jsx/ListAirlines.jsx';  // Asegúrate de que la ruta sea correcta
import SearchBar from './components/jsx/SearchBar.jsx';
import NavBar from './components/jsx/NavBar.jsx';
import SignIn from './components/signin_form/SignIn.jsx';
import SignUp from './components/register_form/SignUp.jsx';
import AeropuertoForm from './components/Airports/AeropuertoForm.jsx';
import AerolineasForm from './components/Airports/AerolineasForm.jsx';
import VuelosForm from './components/Airports/VuelosForm.jsx';
import OfferFlights from './components/jsx/OfferFlights.jsx';
import ListadoAerolíneas from './components/Airports/ListadoAerolíneas.jsx'; // Importa el componente ListadoAerolíneas
import AirlineGrid from './components/jsx/AirlineGrid.jsx';
import ListadoVuelos from './components/Airports/ListadoVuelos.jsx'; 
import InfoHelp from './components/jsx/InfoHelp.jsx';
import './App.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas con Layout */}
        <Route
          path="/api/v1/ListAirlines"
          element={
            <Layout>
              <ListAirlines />
            </Layout>
          }
        />
        <Route
          path="/SearchBar"
          element={
            <Layout>
              <SearchBar />
            </Layout>
          }
        />

        <Route
          path="/airline-grid"
          element={
            <Layout>
              <AirlineGrid />
            </Layout>
          }
        />

        {/* <Route
          path="/offerFlights"
          element={
            <Layout>
              <OfferFlights />
            </Layout>
          }
        /> */}

        {/* Rutas sin Layout */}
        <Route path="/aeropuerto" element={<AeropuertoForm />} />
        <Route path="/aerolineas" element={<AerolineasForm />} />
        <Route path="/infohelp" element={<InfoHelp />} />
        <Route path="/offerFlights" element={<OfferFlights />} />
        <Route path="/AirlineGrid" element={<AirlineGrid />} />
        <Route path="/vuelos" element={<VuelosForm />} />
        <Route path="/listado-vuelos" element={<ListadoVuelos />} />
        <Route path="/listado-aerolineas" element={<ListadoAerolíneas />} /> {/* Nueva ruta agregada */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
