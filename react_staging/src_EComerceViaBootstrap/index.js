//import react
import React from 'react'
//import ReactDOM
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

//render app
ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>, 
document.getElementById('root'));