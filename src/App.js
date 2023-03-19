
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Constitution from './components/constitution';
import Gallery from './components/gallery';
import Contact from './components/contact';
import OfficeBeares from "./components/officeBeares";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/constitution" element={<Constitution/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/officeBeares" element={<OfficeBeares/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
