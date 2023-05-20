import { useState } from "react";
import React from 'react';
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
  );
}

export default Home;
