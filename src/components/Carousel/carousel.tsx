import React, { useState, useEffect } from 'react';
import {
  CarouselContainer,
  Arrow,
  CarouselItems,
  CarouselItem,
  ImageContainer,
  BackgroundImage,
  Overlay,
  Content,
  CategoryLabel,
  NewsTitle,
  Info,
  CommentsIcon,
  CarouselIndicators,
  Indicator,
} from './styles.ts';

interface CarouselItem {
  category: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  image: string;
}

interface ArrowProps {
  direction: 'left' | 'right';
}

interface IndicatorProps {
  active: boolean;
}

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items: CarouselItem[] = [
    {
      category: 'FÍSICA',
      title: 'Nuevo Descubrimiento en Física de Partículas Promete Desentrañar los Misterios del Universo',
      author: 'admin',
      date: 'junio 23, 2024',
      comments: 0,
      image: '/assets/carrousel-img-6.jpg',
    },
    {
      category: 'TECNOLOGÍA',
      title: 'Avance Tecnológico Permite Desarrollar Baterías de Larga Duración',
      author: 'admin',
      date: 'junio 22, 2024',
      comments: 0,
      image: '/assets/carrousel-img-5.jpg',
    },
    {
      category: 'IA Y ROBÓTICA',
      title: 'Nuevo Robot Autónomo Promete Revolucionar la Industria de la Logística',
      author: 'admin',
      date: 'junio 21, 2024',
      comments: 0,
      image: '/assets/carrousel-img-3.png',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto-slide cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  // Cambio realizado según la retroalimentación: manejo de caso cuando items está vacío.
  if (!items || items.length === 0) {
    return (
      <CarouselContainer>
        <p>No hay elementos para mostrar en el carrusel.</p>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer>
      {/* Flecha Izquierda */}
      <Arrow src="/assets/left-arrow-icon.svg" alt="Flecha Izquierda" onClick={prevSlide} direction="left" />

      {/* Contenedor de Items */}
      <CarouselItems>
        {items.map((item, index) => (
          <CarouselItem key={index} className={index === activeIndex ? 'active' : ''}>
            <ImageContainer>
              <BackgroundImage src={item.image} alt={`Imagen de ${item.category}`} />
              <Overlay />
            </ImageContainer>
            <Content>
              <CategoryLabel>{item.category}</CategoryLabel>
              <NewsTitle>{item.title}</NewsTitle>
              <Info>
                <span>{item.author}</span>
                <span>{item.date}</span>
                <span>
                  <CommentsIcon src="/assets/comments-icon.svg" alt="Comentarios" />
                </span>
              </Info>
            </Content>
          </CarouselItem>
        ))}
      </CarouselItems>

      {/* Flecha Derecha */}
      <Arrow src="/assets/right-arrow-icon.svg" alt="Flecha Derecha" onClick={nextSlide} direction="right" />

      {/* Indicadores */}
      <CarouselIndicators>
        {items.map((_, index) => (
          <Indicator key={index} active={index === activeIndex} onClick={() => goToSlide(index)} />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default Carousel;
