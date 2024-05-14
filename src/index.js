import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
   <Router />
  // </React.StrictMode>
);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/