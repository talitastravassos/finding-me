import 'leaflet/dist/leaflet.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IPFindProvider } from './context/IPFindContext';

ReactDOM.render(
  <IPFindProvider>
    <App />
  </IPFindProvider>,
  document.getElementById('root'),
);
