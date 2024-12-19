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

import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";

const testimonials = [
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

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>Opiniones de nuestros lectores.</TestimonialsTitle>
        <TestimonialsDescription>
          Descubre cómo nuestro boletín informativo y nuestras noticias diarias han impactado a nuestra comunidad de lectores.
        </TestimonialsDescription>
        <TestimonialsWrapper>
          <TestimonialsScroller>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index}>
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
