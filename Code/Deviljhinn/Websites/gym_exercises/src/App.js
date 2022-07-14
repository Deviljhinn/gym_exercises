//These are the dependancies for the entire app
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

//These are the other pages of my app
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

//These are the other components of my app
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//A simple const boilerplate was made with rafce
//It is a react snippet extension called ES7+ 
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App