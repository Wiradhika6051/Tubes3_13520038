import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import TambahkanPenyakit from './pages/TambahkanPenyakit.js';
import Header from './pages/Header';
//import Menu from './pages/Menu';
//import TesDNA from './pages/TesDNA';
import Footer from './pages/Footer';
import Pencarian from './pages/Penarian';
//import Home from './pages/Home';
import ShowUrutan from './pages/ShowUrutan';
//import HelloComponent from './component/HelloComponent'
//import {BrowserRouter, Route, Link} from 'react-router-dom'

//ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Pencarian />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
