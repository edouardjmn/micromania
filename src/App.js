import React from 'react';
import './App.css';
import Mapbox from './components/Mapbox';
import micromania from "./micromania.json";

function App() {
  return (
    <Mapbox stores={micromania} />
  );
}

export default App;
