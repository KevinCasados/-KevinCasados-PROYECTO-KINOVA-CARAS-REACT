import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  Container,
  Navigation,
  Logo,
  Hamburger,
  Menu,
  NavList,
  NavItem,
  SearchSection,
  SearchButton,
} from "./styles";
import MenuDropdown from "../Menu/MenuDropdown";

// Tipos para las props del menú
interface HamburgerProps {
  isMenuOpen: boolean;
}

// Constantes de imágenes
const logoCaras = "/assets/Logo 2.png";
const searchIcon = "/assets/search-icon-black.svg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Cerrar menú al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1094) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer className={isScrolled ? "scrolled" : "top"}>
      <Container>
        <Navigation>
          <Logo>
            <img src={logoCaras} alt="Logo CARAS" />
          </Logo>
          <Hamburger role="button"  onClick={toggleMenu} isMenuOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <Menu isMenuOpen={isMenuOpen}>
            <NavList>
              <NavItem>
                <a href="#">Inicio</a>
              </NavItem>
              <NavItem>
                <a href="#">Entretenimiento</a>
              </NavItem>
              <NavItem>
                <a href="#">Realeza</a>
              </NavItem>
              <NavItem>
                <a href="#">Moda</a>
              </NavItem>
              <NavItem>
                <a href="#">Estilo de Vida</a>
              </NavItem>
            </NavList>
            <SearchSection>
              <SearchButton aria-label="Buscar">
                <img src={searchIcon} alt="Icono de Buscar" />
              </SearchButton>
            </SearchSection>
          </Menu>
          <MenuDropdown isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </Navigation>
      </Container>
    </HeaderContainer>
  );
};

export default Header;