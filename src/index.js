import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let components = {};
import Button from './Button';
components.Button = Button;

ReactDOM.render(
  <App components={components} />,
  document.getElementById('root')
);
