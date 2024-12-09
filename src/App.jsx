import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealDetails from './pages/CategoryDetails';
import CategoryPage from './pages/categorypage';
import './App.css'

function App() {
 

  return(
    <Router>
       <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/categories/:categories" element={<CategoryPage />}/>
         <Route path="/meal/:idMeal" element={<MealDetails/>}/>  
       </Routes>
       </Router>
  )
}

export default App
