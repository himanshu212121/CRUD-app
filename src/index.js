import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom' instead of 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import SignUp from './pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
