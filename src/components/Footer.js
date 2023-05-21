import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import Logo2 from '../assets/images/Logo-2.png';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <a href="/"> <img src={Logo2} alt="logo" style={{ width: '200px' }} /></a>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '17px', xs: '13px' } }} mt="30px" textAlign="center" pb="40px">© 2023 Niyas Kandengil</Typography>
  </Box>
);

export default Footer;