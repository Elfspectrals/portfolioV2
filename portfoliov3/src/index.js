import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
    <Header />
      <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
