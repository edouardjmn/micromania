import React from 'react';
import './App.css';
import Mapbox from './components/Mapbox';
import Download from './components/Download';
import micromania from "./micromania.json";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Mapbox stores={micromania} />
      <div id='history'>
        <Download />
      </div>
    </Provider>
  );
}

export default App;
