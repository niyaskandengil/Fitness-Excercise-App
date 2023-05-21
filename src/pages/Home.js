import { useState } from "react";
import React from 'react';
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import Excercises from "../components/Excercises";

const Home = () => {
  const [bodyParts, setBodyParts] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
  );
}

export default Home;
