import styled from 'styled-components';
import { theme } from '../../App/theme';

export const Section = styled.section`
  max-width: 1720px;
  margin: 0 auto;
  padding: 48px 36px;

  @media (max-width: ${theme.breakpoint_lg}) {
    padding: 32px 64px;
  }

  @media (max-width: ${theme.breakpoint_sm}) {
    padding: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoint_lg}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ArticleCard = styled.article`
  background-color: #fff2f2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  padding: 1rem;
  display: grid;
`;

export const ArticleData = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const ArticleDate = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

export const ArticleCategory = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${theme.primaryColor};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ArticleDescription = styled.p`
  font-size: 0.875rem;
  color: #555;
`;