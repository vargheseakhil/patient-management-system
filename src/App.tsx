import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import "./_mocks/fetchmock";
import LoginContainer from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
