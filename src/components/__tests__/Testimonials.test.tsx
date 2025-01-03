import React from "react";
import { render, screen, within } from "@testing-library/react";
import Testimonials from "../Testimonials/testimonials";

describe("Testimonials Component", () => {
  test("debería renderizar correctamente el componente", () => {
    render(<Testimonials />);
    expect(screen.getByText(/Opiniones de nuestros lectores/i)).toBeInTheDocument();
    expect(screen.getByText(/Descubre cómo nuestro boletín/i)).toBeInTheDocument();
  });

  test("debería renderizar la cantidad correcta de testimonios", () => {
    render(<Testimonials />);
    const testimonials = screen.getAllByRole("article"); // Cada tarjeta de testimonio debería tener un rol semántico
    expect(testimonials.length).toBeGreaterThanOrEqual(8); // Duplicación de 4 testimonios = 8 tarjetas
  });

  test("debería mostrar las imágenes de avatar con alt correctos", () => {
    render(<Testimonials />);
    const avatars = screen.getAllByRole("img");
    expect(avatars.length).toBeGreaterThanOrEqual(8); // Verificar duplicación
    avatars.forEach((avatar, index) => {
      expect(avatar).toHaveAttribute("alt");
      expect(avatar).toHaveAttribute("src");
    });
  });

  test("debería tener un diseño de scroller", () => {
    render(<Testimonials />);
    const scroller = screen.getByRole("list"); // Usar role="list" para el scroller
    expect(scroller).toBeInTheDocument();
  });
});