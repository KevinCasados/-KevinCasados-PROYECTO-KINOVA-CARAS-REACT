import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header/header";

describe("Header Component", () => {
  describe("Renderizado inicial", () => {
    it("debería renderizar el logotipo correctamente", () => {
      render(<Header />);
      const logos = screen.getAllByAltText("Logo CARAS");
      expect(logos[0]).toBeInTheDocument(); // Selecciona el primer logotipo
      expect(logos[0]).toHaveAttribute("src", "/assets/Logo 2.png");
    });

    it("debería renderizar los elementos de navegación correctamente", () => {
      render(<Header />);
      const navItems = screen.getAllByRole("link");
      const navTexts = ["Inicio", "Entretenimiento", "Realeza", "Moda", "Estilo de Vida"];
      expect(navItems).toHaveLength(navTexts.length);
      navItems.forEach((item, index) => {
        expect(item).toHaveTextContent(navTexts[index]);
      });
    });
  });

  describe("Cambio de estado por scroll", () => {
    it("debería añadir la clase 'scrolled' cuando el usuario hace scroll", () => {
      render(<Header />);
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      const header = screen.getByRole("banner");
      expect(header).toHaveClass("scrolled");
    });
  });
});