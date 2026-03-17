import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from "./pages/home"; 
import Nav from "./pages/nav"; 
import Wish from "./pages/wish";
import Message from "./pages/message";
import Photos from "./pages/photos";
import Songs from "./pages/songs";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/wish" element={<Wish/>} /> 
        <Route path="/message" element={<Message/>} /> 
        <Route path="/photos" element={<Photos/>} /> 
        <Route path="/songs" element={<Songs/>} /> 
      </Routes>
    </Router>
  );
}

export default App;