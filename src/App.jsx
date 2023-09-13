// import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './Components/LoginForm/LoginForm'
import Registro from './Components/RegisterForm/RegisterForm';
import Reporte from './Components/ReportForm/ReportForm';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} />
        <Route path="/reporte" element={<Reporte/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App
