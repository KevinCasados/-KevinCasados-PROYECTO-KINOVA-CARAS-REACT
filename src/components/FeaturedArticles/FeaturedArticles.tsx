import React from 'react';
import {
  Section,
  SectionTitle,
  ArticlesContainer,
  ArticleCard,
  ArticleImage,
  ArticleContent,
  ArticleDate,
  ArticleCategory,
  ArticleTitle,
  ArticleDescription,
  ArticleData,
} from './styles';

// Definir la interfaz para los artículos
interface Article {
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    image: '/assets/news-img-1.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Innovador Microchip Promete Revolucionar la Computación',
    description:
      'Es un ritual diario para muchos investigadores en tecnología, pero si has notado la creciente expectativa en torno a la computación cuántica, prepárate...',
  },
  {
    image: '/assets/news-img-2.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Innovador Sistema de Energía Solar Flotante Promete Transformar la Generación de Energía Renovable',
    description:
      'Un equipo de ingenieros de la Universidad de Stanford ha desarrollado un sistema de energía solar flotante que podría revolucionar la generación de energía...',
  },
  {
    image: '/assets/news-img-3.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Avance Tecnológico Permite Desarrollar Red 6G para Comunicaciones Ultrarrápidas',
    description:
      'Un equipo de ingenieros del Instituto Tecnológico de California (Caltech) ha desarrollado una nueva tecnología que promete hacer realidad las redes 6G...',
  },
  {
    image: '/assets/news-img-4.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Avance Tecnológico Permite Desarrollar Baterías de Larga Duración y Carga Rápida',
    description:
      'Un equipo de ingenieros de la Universidad de Stanford ha desarrollado una nueva tecnología de baterías que promete transformar la industria de dispositivos electrónicos...',
  },
  {
    image: '/assets/news-img-5.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Innovadora Tecnología de Inteligencia Artificial Mejora la Seguridad en Línea',
    description:
      'Un equipo de investigadores del Instituto Tecnológico de Massachusetts (MIT) ha desarrollado una nueva tecnología de inteligencia artificial (IA) que promete mejorar significativamente la...',
  },
  {
    image: '/assets/news-img-6.webp',
    date: '21 junio 2024',
    category: 'TECNOLOGÍA',
    title: 'Innovadora Tecnología de Hologramas 3D Revoluciona las Videoconferencias',
    description:
      'Investigadores de la Universidad de Oxford han desarrollado una tecnología de hologramas 3D que promete transformar la forma en que se realizan las videoconferencias...',
  },
  {
    image: '/assets/news-img-7.webp',
    date: '21 junio 2024',
    category: 'BIOLOGÍA',
    title: 'Avance en Genómica Revela Nuevas Pistas sobre la Evolución Humana',
    description:
      'Investigadores de la Universidad de Cambridge han hecho un descubrimiento significativo en el campo de la genómica que proporciona nuevas perspectivas sobre la evolución...',
  },
  {
    image: '/assets/news-img-8.webp',
    date: '21 junio 2024',
    category: 'BIOLOGÍA',
    title: 'Descubrimiento en Biología Celular Abre Nuevas Vías para el Tratamiento de Enfermedades Neurodegenerativas',
    description:
      'Un equipo de científicos de la Universidad de California, Berkeley, ha realizado un descubrimiento innovador en el campo de la biología celular que podría...',
  },
  {
    image: '/assets/news-img-9.webp',
    date: '21 junio 2024',
    category: 'BIOLOGÍA',
    title: 'Científicos Descubren Nueva Especie de Bacteria que Podría Ayudar a Combatir la Contaminación Plástica',
    description:
      'Es un ritual diario para muchos investigadores ambientales, pero si has notado la creciente preocupación por la contaminación plástica, prepárate: está a punto de...',
  },
];


const FeaturedArticles: React.FC = () => {
  if (!articles || articles.length === 0) {
    return (
      <Section>
        <SectionTitle>Artículos destacados</SectionTitle>
        <p>No hay artículos para mostrar.</p>
      </Section>
    );
  }
  return (
    <Section aria-labelledby="featured-articles-title">
      <SectionTitle id="featured-articles-title">Artículos destacados</SectionTitle>
      <ArticlesContainer>
        {articles.map((article, index) => (
          <ArticleCard key={index} role="article" aria-labelledby={`article-title-${index}`}>
            <ArticleImage
              src={article.image}
              loading='lazy'
              alt={`Imagen representativa del artículo: ${article.title}`}
            />
            <ArticleContent>
              <ArticleData>
                <ArticleDate>{article.date}</ArticleDate>
                <ArticleCategory>{article.category}</ArticleCategory>
              </ArticleData>
              <ArticleTitle id={`article-title-${index}`}>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesContainer>
    </Section>
  );
};

export default FeaturedArticles;