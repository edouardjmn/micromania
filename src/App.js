import React from 'react';
import './App.css';
import Mapbox from './components/Mapbox';
import micromania from "./micromania.json";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Mapbox stores={micromania} />
    </Provider>
  );
}

export default App;
