import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer/footer'; // Ajusta la ruta según tu estructura de carpetas

describe('Footer Component', () => {
    it('debería renderizar correctamente el componente', () => {
        render(<Footer />);
        const contentInfo = screen.getByRole('contentinfo');
        expect(contentInfo).toBeInTheDocument();
        
        // Busca todos los elementos con el texto "CARAS"
        const carasElements = screen.getAllByText(/CARAS/i);
        expect(carasElements.length).toBeGreaterThan(0);
      });

  it('debería contener todos los enlaces de navegación', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);

    const expectedLinks = [
      'Quiénes Somos',
      'Nuestro Equipo',
      'Contáctanos',
      'Noticias',
      'Tendencias',
      'Entrevistas',
      'Reportajes Especiales',
      'Preguntas Frecuentes',
      'Política de Privacidad',
      'Términos y Condiciones',
      'Redes',
      'Facebook',
      'Instagram',
      'Twitter',
      'YouTube',
    ];

    expectedLinks.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('debería incluir los íconos sociales con etiquetas aria-label correctas', () => {
    render(<Footer />);
    const socialLinks = [
      { label: 'Visit our Facebook page', icon: 'FaFacebookF' },
      { label: 'Visit our Instagram page', icon: 'FaInstagram' },
      { label: 'Visit our YouTube channel', icon: 'FaYoutube' },
      { label: 'Visit our GitHub page', icon: 'FaGithub' },
      { label: 'Visit our Twitch page', icon: 'FaTwitch' },
    ];

    socialLinks.forEach(({ label }) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('debería manejar correctamente el formulario de suscripción', () => {
    render(<Footer />);
    const emailInput = screen.getByPlaceholderText(/Correo Electrónico/i);
  
    // Actualización para buscar el botón
    const subscribeButton = screen.getByRole('button', {
      name: /Sign up for newsletter/i, // Cambiado para coincidir con el aria-label
    });
  
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  
    // Simula un cambio de texto en el input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('debería mostrar el texto de derechos reservados correctamente', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2024 CARAS. Todos los derechos reservados./i)
    ).toBeInTheDocument();
  });
});