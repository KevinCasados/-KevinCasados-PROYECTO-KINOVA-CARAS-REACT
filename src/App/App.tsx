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
        {/* Agregar role="main" para el contenido principal */}
        <div role="main" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;