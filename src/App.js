import React from 'react';
import './App.css';
import Mapbox from './components/Mapbox';
import Download from './components/Download';
import History from './components/History';
import micromania from "./micromania.json";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Mapbox stores={micromania} />
      <div id='history'>
        <History />
        <Download />
      </div>
    </Provider>
  );
}

export default App;
