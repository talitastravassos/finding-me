import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IPFindProvider } from './state/context/IPFindContext';

ReactDOM.render(
  <IPFindProvider>
    <App />
  </IPFindProvider>,
  document.getElementById('root'),
);
