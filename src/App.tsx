import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './_mocks/fetchmock';
import LoginContainer from './components/Login'
import Home from './components/Home'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Container>
  );
}
