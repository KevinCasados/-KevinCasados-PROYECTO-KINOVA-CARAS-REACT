import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../Form/form";

describe("Form Component", () => {
  it("debería renderizar correctamente los elementos iniciales", () => {
    render(<Form />);

    // Verificar que los campos de entrada están en el documento
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();

    // Verificar que el botón de suscripción está en el documento
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it("debería mostrar un mensaje de error si el campo 'nombre' está vacío", async () => {
    render(<Form />);

    const emailInput = screen.getByPlaceholderText("Email");
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    const alertBox = await screen.findByText(
      /El campo de nombre no puede estar vacío./i
    );
    expect(alertBox).toBeInTheDocument();
  });

  it("debería mostrar un mensaje de error si el email no tiene un formato válido", async () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText("Nombre");
    const emailInput = screen.getByPlaceholderText("Email");
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    const alertBox = await screen.findByText(
      /El correo electrónico no tiene un formato válido./i
    );
    expect(alertBox).toBeInTheDocument();
  });

  it("debería mostrar un mensaje de éxito si todos los campos son válidos", async () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText("Nombre");
    const emailInput = screen.getByPlaceholderText("Email");
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    const successMessage = await screen.findByText(/¡Suscripción exitosa!/i);
    expect(successMessage).toBeInTheDocument();
  });

  it("debería reiniciar los campos después de una suscripción exitosa", async () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText("Nombre");
    const emailInput = screen.getByPlaceholderText("Email");
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
    });
  });
});