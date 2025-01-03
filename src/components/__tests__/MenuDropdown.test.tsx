import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuDropdown from "../Menu/MenuDropdown";

describe("MenuDropdown Component", () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debería renderizar correctamente el componente", () => {
    render(<MenuDropdown isOpen={true} onClose={onCloseMock} />);
    expect(screen.getByAltText("Logo CARAS")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cerrar menú/i })).toBeInTheDocument();
  });

  test("debería ser visible cuando isOpen es true", () => {
    render(<MenuDropdown isOpen={true} onClose={onCloseMock} />);
    expect(screen.getByRole("menu")).toHaveStyle("visibility: visible");
  });

  test("debería llamar a onClose al hacer clic en el botón de cerrar", () => {
    render(<MenuDropdown isOpen={true} onClose={onCloseMock} />);
    const closeButton = screen.getByRole("button", { name: /cerrar menú/i });
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("debería contener todos los elementos de navegación", () => {
    render(<MenuDropdown isOpen={true} onClose={onCloseMock} />);
    const navItems = screen.getAllByRole("listitem");
    expect(navItems).toHaveLength(5);
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Entretenimiento/i)).toBeInTheDocument();
    expect(screen.getByText(/Realeza/i)).toBeInTheDocument();
    expect(screen.getByText(/Moda/i)).toBeInTheDocument();
    expect(screen.getByText(/Estilo de Vida/i)).toBeInTheDocument();
  });
});
