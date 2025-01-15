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

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items: CarouselItem[] = [
    {
      category: 'FÍSICA',
      title: 'Nuevo Descubrimiento en Física de Partículas Promete Desentrañar los Misterios del Universo',
      author: 'admin',
      date: 'junio 23, 2024',
      comments: 0,
      image: '/assets/carrousel-img-6.webp',
    },
    {
      category: 'TECNOLOGÍA',
      title: 'Avance Tecnológico Permite Desarrollar Baterías de Larga Duración',
      author: 'admin',
      date: 'junio 22, 2024',
      comments: 0,
      image: '/assets/carrousel-img-5.webp',
    },
    {
      category: 'IA Y ROBÓTICA',
      title: 'Nuevo Robot Autónomo Promete Revolucionar la Industria de la Logística',
      author: 'admin',
      date: 'junio 21, 2024',
      comments: 0,
      image: '/assets/carrousel-img-3.webp',
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

  if (!items || items.length === 0) {
    return (
      <CarouselContainer>
        <p>No hay elementos para mostrar en el carrusel.</p>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer
      role="region"
      aria-label="Carrusel de noticias destacadas"
    >
      {/* Flecha Izquierda */}
      <Arrow
        src="/assets/left-arrow-icon.svg"
        alt="Flecha para ver el elemento anterior"
        onClick={prevSlide}
        role="button"
        aria-label="Anterior"
        direction="left"
      />

      {/* Contenedor de Items */}
      <CarouselItems aria-live="polite">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={index === activeIndex ? "active" : ""}
            role="group"
            aria-label={`Noticia ${index + 1} de ${items.length}`}
          >
            <ImageContainer>
              <BackgroundImage
                src={item.image}
                rel="preload"
                alt={`Imagen representativa de la categoría ${item.category}`}
              />
              <Overlay />
            </ImageContainer>
            <Content>
              <CategoryLabel>{item.category}</CategoryLabel>
              <NewsTitle>{item.title}</NewsTitle>
              <Info>
                <span>{item.author}</span>
                <span>{item.date}</span>
                <span>
                  <CommentsIcon
                    src="/assets/comments-icon.svg"
                    alt="Icono de comentarios"
                  />
                </span>
              </Info>
            </Content>
          </CarouselItem>
        ))}
      </CarouselItems>

      {/* Flecha Derecha */}
      <Arrow
        src="/assets/right-arrow-icon.svg"
        alt="Flecha para ver el siguiente elemento"
        onClick={nextSlide}
        role="button"
        aria-label="Siguiente"
        direction="right"
      />

      {/* Indicadores */}
      <CarouselIndicators>
        {items.map((_, index) => (
          <Indicator
            key={index}
            active={index === activeIndex} // Proporcionar la propiedad `active`
            aria-label={`Seleccionar noticia ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default Carousel;
