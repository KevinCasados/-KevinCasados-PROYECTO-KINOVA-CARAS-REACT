import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Usa BrowserRouter
import GlobalStyle from "../App/styles"; // Ruta correcta hacia tu GlobalStyle
import { ThemeProvider } from "styled-components";
import { theme } from "./theme"; // Archivo de tema

import Home from "../pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Aplica el estilo global */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;