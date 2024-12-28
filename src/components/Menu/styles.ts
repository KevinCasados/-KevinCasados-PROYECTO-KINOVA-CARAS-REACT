import styled from "styled-components";
import { theme } from "../../App/theme";

// Tipos para las props del menú
interface MenuProps {
  isOpen: boolean;
}

// Definir las props para el componente
interface HeaderProps {
  isScrolled: boolean;
}

export const HeaderContainer = styled.div<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${(props) =>
    props.isScrolled
      ? theme.primaryColor
      : "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)"};
  transition: background-color 0.3s ease;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  img {
    max-width: 150px;
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: ${theme.secondaryColor};
    border-radius: 5px;
    transition: 0.3s ease;
  }

  @media (min-width: ${theme.breakpoint_md}) {
    display: none;
  }
`;

export const MenuContainer = styled.div<MenuProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  background-color: #ed1e1e;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  z-index: 200;

  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

  @media (max-width: ${theme.breakpoint_md || "1094px"}) {
    display: block;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const MenuLogo = styled.img`
  max-width: 100px;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
    background: none;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #ed1e1e;
    background-color: #ffffff;
    cursor: pointer;
    padding: 3px 7px;
    border-radius: 50%;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.1); /* Ampliación al pasar el cursor */
    }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 15px 0;

    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1rem;
        padding: 5px 0;
        font-weight: 400;
        border-bottom: 2px solid transparent;
        transition: color, border-color, transform 0.3s ease-in-out;
        display: inline-block;
        transition: color 0.3s, border-color 0.3s, transform 0.3s;

      &:hover {
        color: ${theme.secondaryColor || "#ffffff"};
        border-color: ${theme.primaryColor || "#ed1e1e"};
        transform: scale(1.05);
      }
    }
  }
`;

export const NavItem = styled.li``;