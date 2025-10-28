import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import Kunstprojekt from './pages/Kunstprojekt';
import Vita from './pages/Vita';
import Galerie from './pages/Galerie';
import Aktuelles from './pages/Aktuelles';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
/// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ArrowBack from './components/ArrowBack';



function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <ArrowBack />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kunstprojekt' element={<Kunstprojekt />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/galerie' element={<Galerie />} />
          <Route path='/aktuelles' element={<Aktuelles />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
      <Footer />



    </>
  )
}

export default App
