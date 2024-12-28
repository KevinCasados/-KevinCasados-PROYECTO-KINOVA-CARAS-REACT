import styled, { keyframes } from "styled-components";

const scrollHorizontal = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TestimonialsSection = styled.section`
  padding: 60px 0;
`;

export const TestimonialsContainer = styled.article`
  max-width: 1720px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const TestimonialsDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
`;

export const TestimonialsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
`;

export const TestimonialsScroller = styled.div`
  display: flex;
  gap: 20px;
  animation: ${scrollHorizontal} 30s linear infinite;
`;

export const TestimonialCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(to bottom left, #000000, #ed1e1e);
  width: 499px;
  height: 299px;
  flex: none;
  text-align: left;
  display: grid;
  align-items: center;
  align-content: center;
`;

export const TestimonialText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  font-style: italic;
  margin-bottom: 20px;
  color: white;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const AuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  filter: grayscale(100%);
`;

export const AuthorDetails = styled.div`
  display: grid;
  font-size: 0.9rem;
`;

export const AuthorName = styled.span`
  font-weight: bold;
`;

export const AuthorTitle = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;