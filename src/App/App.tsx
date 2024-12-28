import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "../App/styles"; // Importar estilos globales
import { ThemeProvider } from "styled-components";
import { theme } from "./theme"; // Archivo de tema
import Home from "../pages/Home/Home"; // Página principal

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Estilo global */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;