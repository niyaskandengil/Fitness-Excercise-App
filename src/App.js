import React from 'react'
import './App.css'; // import css file
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App