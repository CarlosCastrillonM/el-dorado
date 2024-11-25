import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAirlines from './ListAirlines.jsx';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import SignUp from './assets/pages/login/components/register_form/SignUp.jsx';
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
          path="/a"
          element={
            <Layout>
              <ListAirlines />
            </Layout>
          }
        />
        <Route
          path="/b"
          element={
            <Layout>
              <SearchBar />
            </Layout>
          }
        />

        {/* Rutas sin Layout */}
        <Route path="/c" element={<SignIn />} />
        <Route path="/d" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
