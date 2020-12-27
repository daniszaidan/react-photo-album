import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import configureStore, { history } from './redux/store';

const store = configureStore();

ReactDOM.render(
  // <React.StrictMode>
  <App history={history} store={store} />,
  // </React.StrictMode>,
  document.getElementById('root')
);
