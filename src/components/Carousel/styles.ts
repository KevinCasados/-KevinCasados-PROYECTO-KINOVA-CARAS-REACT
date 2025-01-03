import styled, { keyframes } from 'styled-components';
import { theme } from '../../App/theme';

interface ArrowProps {
  direction: "left" | "right";
}

// Animaciones
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Arrow = styled.img<ArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  ${(props) => (props.direction === 'left' ? 'left: 5%;' : 'right: 5%;')}
`;

export const CarouselContainer = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: black;

  &:hover ${Arrow} {
    opacity: 1;
  }
`;

export const CarouselItems = styled.div`
  position: relative;
  width: 100%;
  height: 89vh;
`;

export const CarouselItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  animation: none;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
    animation: ${fadeIn} 0.5s ease-in-out;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

export const Content = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 2;
  color: ${theme.secondaryColor};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const CategoryLabel = styled.div`
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  display: inline-block;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NewsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  & span {
    display: inline-flex;
    margin-right: 15px;
    align-items: center;
  }
`;

export const CommentsIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

export const Indicator = styled.button<{ active: boolean }>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? theme.primaryColor : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.primaryColor};
  }
`;
