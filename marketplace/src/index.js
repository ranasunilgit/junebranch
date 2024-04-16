import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <App />
 </React.StrictMode>
)
