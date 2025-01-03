import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedArticles from '../FeaturedArticles/FeaturedArticles'


describe('FeaturedArticles Component', () => {
  it('debería renderizar correctamente el componente', () => {
    render(<FeaturedArticles />);
    expect(screen.getByText(/Artículos destacados/i)).toBeInTheDocument();
  });

  it('debería renderizar la cantidad correcta de artículos', () => {
    render(<FeaturedArticles />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(9); // Según los datos proporcionados
  });
});