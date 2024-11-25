import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAirlines from './ListAirlines.jsx';  // Asegúrate de que la ruta sea correcta
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import SignUp from './assets/pages/login/components/register_form/SignUp.jsx';
import AeropuertoForm from './components/Airports/AeropuertoForm.jsx';
import AerolineasForm from './components/Airports/AerolineasForm.jsx';
import VuelosForm from './components/Airports/VuelosForm.jsx';
import ListadoAerolíneas from './components/Airports/ListadoAerolíneas.jsx'; // Importa el componente ListadoAerolíneas
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
          path="/ListAirlines "
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

        {/* Rutas sin Layout */}
        <Route path="/aeropuerto" element={<AeropuertoForm />} />
        <Route path="/aerolineas" element={<AerolineasForm />} />
        <Route path="/vuelos" element={<VuelosForm />} />
        <Route path="/listado-aerolineas" element={<ListadoAerolíneas />} /> {/* Nueva ruta agregada */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
