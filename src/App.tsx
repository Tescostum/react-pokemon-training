import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { PokemonList } from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Hello compiler="TypeScript" framework="React"/>
      <PokemonList />
    </div>
  );
}

export default App;
