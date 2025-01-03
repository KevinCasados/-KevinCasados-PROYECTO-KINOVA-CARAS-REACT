import React from "react";
import {
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialsTitle,
  TestimonialsDescription,
  TestimonialsWrapper,
  TestimonialsScroller,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorTitle,
} from "./styles";

// Cambiar las importaciones por referencias directas
const avatar1 = "/assets/avatar-1.png";
const avatar2 = "/assets/avatar-2.png";
const avatar3 = "/assets/avatar-3.png";
const avatar4 = "/assets/avatar-4.png";

// Definir el tipo para los testimonios
interface Testimonial {
  text: string;
  author: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    text: "El newsletter de CARAS se ha convertido en mi fuente diaria de información. Siempre recibo noticias relevantes.",
    author: "Sofía Ramírez",
    title: "Lectora habitual",
    avatar: avatar1,
  },
  {
    text: "Gracias a los artículos de CARAS, estoy siempre informado sobre las últimas tendencias en tecnología y cultura.",
    author: "Juan Hernández",
    title: "Suscriptor Premium",
    avatar: avatar2,
  },
  {
    text: "Los análisis de CARAS son profundos y claros. Recibir su newsletter diario me mantiene actualizado sin perder tiempo.",
    author: "Ana López",
    title: "Editora freelance",
    avatar: avatar3,
  },
  {
    text: "Suscribirme al boletín de CARAS fue la mejor decisión. La selección de noticias es perfecta y la calidad insuperable.",
    author: "Pedro Castillo",
    title: "Emprendedor",
    avatar: avatar4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>Opiniones de nuestros lectores.</TestimonialsTitle>
        <TestimonialsDescription>
          Descubre cómo nuestro boletín informativo y nuestras noticias diarias han impactado a nuestra comunidad de lectores.
        </TestimonialsDescription>
        <TestimonialsWrapper>
          <TestimonialsScroller role="list">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard role="article" key={index}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar src={testimonial.avatar} alt={testimonial.author} />
                  <AuthorDetails>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorDetails>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsScroller>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
