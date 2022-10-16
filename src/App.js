import './App.css';
import React from 'react'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="aboutpage" element={<AboutPage/>} />
        <Route path="contactpage" element={<ContactPage/>} />
      </Routes>
    </div>
  )
}

export default App;
