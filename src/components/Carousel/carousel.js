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
} from './styles';
import leftArrowIcon from '../../assets/left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';
import commentsIcon from '../../assets/comments-icon.svg';
import img1 from '../../assets/carrousel-img-6.jpg';
import img2 from '../../assets/carrousel-img-5.jpg';
import img3 from '../../assets/carrousel-img-3.png';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      category: 'FÍSICA',
      title:
        'Nuevo Descubrimiento en Física de Partículas Promete Desentrañar los Misterios del Universo',
      author: 'admin',
      date: 'junio 23, 2024',
      comments: 0,
      image: img1,
    },
    {
      category: 'TECNOLOGÍA',
      title: 'Avance Tecnológico Permite Desarrollar Baterías de Larga Duración',
      author: 'admin',
      date: 'junio 22, 2024',
      comments: 0,
      image: img2,
    },
    {
      category: 'IA Y ROBÓTICA',
      title: 'Nuevo Robot Autónomo Promete Revolucionar la Industria de la Logística',
      author: 'admin',
      date: 'junio 21, 2024',
      comments: 0,
      image: img3,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
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
      <Arrow src={leftArrowIcon} alt="Flecha Izquierda" onClick={prevSlide} direction="left" />

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
                  <CommentsIcon src={commentsIcon} alt="Comentarios" /> {item.comments}
                </span>
              </Info>
            </Content>
          </CarouselItem>
        ))}
      </CarouselItems>

      {/* Flecha Derecha */}
      <Arrow src={rightArrowIcon} alt="Flecha Derecha" onClick={nextSlide} direction="right" />

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