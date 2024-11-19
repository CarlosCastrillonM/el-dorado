import React from 'react';
import SearchBar from './components/SearchBar.jsx'; 
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Busca tu vuelo</h1>
      </header>
      {/* Inserta el componente de búsqueda aquí */}
      <SearchBar />
    </div>
  );
};

export default App;
