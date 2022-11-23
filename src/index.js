import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import UserAuthContext from "./context/userAuth.jsx"
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContext>
        <App />
      </UserAuthContext>     
    </BrowserRouter>
  </React.StrictMode>
);

