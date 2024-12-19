import styled from "styled-components";
import { theme } from "../../App/theme"; // Archivo de variables globales

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: top 0.5s ease, background-color 0.3s ease;

  &.top {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  } 

  &.scrolled {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    background-color: ${theme.primaryColor || "#ed1e1e"};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.section`
  padding: 0 20px;
  max-width: 1840px;
  margin: 0 auto;
`;

export const Navigation = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

  @media (max-width: ${theme.breakpoint_md || "1094px"}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const Logo = styled.div`
  img {
    max-width: 150px;
    height: auto;
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: ${theme.secondaryColor || "#ffffff"};
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: ${theme.breakpoint_md || "1094px"}) {
    display: flex;
  }

  /* Animación */
  span:nth-child(1) {
    transform: ${(props) =>
      props.isMenuOpen ? "translateY(8px) rotate(45deg)" : "none"};
  }
  span:nth-child(2) {
    opacity: ${(props) => (props.isMenuOpen ? "0" : "1")};
  }
  span:nth-child(3) {
    transform: ${(props) =>
      props.isMenuOpen ? "translateY(-8px) rotate(-45deg)" : "none"};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: ${theme.breakpoint_md || "1094px"}) {
    display: ${(props) => (props.isMenuOpen ? "none" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${theme.primaryColor || "#ed1e1e"};
    padding: 1rem;
    width: 100%;
    z-index: 99;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;

  @media (max-width: ${theme.breakpoint_md || "1094px"}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${theme.secondaryColor || "#ffffff"};
    font-size: 1rem;
    font-weight: 400;
    padding: 5px 10px;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transition: color 0.3s, border-color 0.3s, transform 0.3s;

    &:hover {
      color: ${theme.secondaryColorColor || "#ffff"};
      border-color: ${theme.primaryColor || "#ed1e1e"};
      transform: scale(1.05);
    }

    &.active {
      color: ${theme.primaryColor || "#ed1e1e"};
      border-color: ${theme.primaryColor || "#ed1e1e"};
      transform: scale(1.05);
    }
  }
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  background: ${theme.secondaryColor || "#ffffff"};
  padding: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${theme.secondaryColor || "#fffff"};
    transform: scale(1.05);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

