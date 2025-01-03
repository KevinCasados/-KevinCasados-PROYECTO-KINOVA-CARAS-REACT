import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../Carousel/carousel';

describe('Carousel Component', () => {
  it('debería renderizar correctamente el componente', () => {
    render(<Carousel />);
    expect(screen.getByText(/Nuevo Descubrimiento en Física de Partículas/i)).toBeInTheDocument();
    expect(screen.getByAltText('Flecha Izquierda')).toBeInTheDocument();
    expect(screen.getByAltText('Flecha Derecha')).toBeInTheDocument();
  });

  it('debería cambiar al siguiente slide al hacer clic en la flecha derecha', () => {
    render(<Carousel />);
    const rightArrow = screen.getByAltText('Flecha Derecha');
    fireEvent.click(rightArrow);
    expect(screen.getByText(/Avance Tecnológico Permite Desarrollar Baterías de Larga Duración/i)).toBeInTheDocument();
  });

  it('debería cambiar al slide anterior al hacer clic en la flecha izquierda', () => {
    render(<Carousel />);
    const leftArrow = screen.getByAltText('Flecha Izquierda');
    fireEvent.click(leftArrow);
    expect(screen.getByText(/Nuevo Robot Autónomo Promete Revolucionar la Industria/i)).toBeInTheDocument();
  });

  it('debería cambiar al slide correspondiente al hacer clic en un indicador', () => {
    render(<Carousel />);
    const indicators = screen.getAllByRole('button', { name: /indicador/i }); // Filtra por el nombre de accesibilidad
    fireEvent.click(indicators[1]);
    expect(screen.getByText(/Avance Tecnológico Permite Desarrollar Baterías de Larga Duración/i)).toBeInTheDocument();
  });

  it('debería realizar el cambio automático de slides cada 8 segundos', () => {
    jest.useFakeTimers();
    render(<Carousel />);
    jest.advanceTimersByTime(8000);
    expect(screen.getByText(/Avance Tecnológico Permite Desarrollar Baterías de Larga Duración/i)).toBeInTheDocument();
    jest.advanceTimersByTime(8000);
    expect(screen.getByText(/Nuevo Robot Autónomo Promete Revolucionar la Industria/i)).toBeInTheDocument();
    jest.useRealTimers();
  });
});