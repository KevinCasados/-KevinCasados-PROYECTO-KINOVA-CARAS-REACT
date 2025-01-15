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

// Constantes de imágenes
const logoCaras = "/assets/Logo 2.webp";
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
        <Navigation aria-label="Menú principal">
          <Logo>
            <img src={logoCaras} alt="Logo de CARAS México" />
          </Logo>
          <Hamburger
            role="button"
            aria-label="Abrir o cerrar menú"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            isMenuOpen={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <Menu isMenuOpen={isMenuOpen}>
            <NavList>
              <NavItem>
                <a href="#" aria-label="Ir a la página de inicio">
                  Inicio
                </a>
              </NavItem>
              <NavItem>
                <a href="#" aria-label="Ir a la sección de entretenimiento">
                  Entretenimiento
                </a>
              </NavItem>
              <NavItem>
                <a href="#" aria-label="Ir a la sección de realeza">
                  Realeza
                </a>
              </NavItem>
              <NavItem>
                <a href="#" aria-label="Ir a la sección de moda">
                  Moda
                </a>
              </NavItem>
              <NavItem>
                <a href="#" aria-label="Ir a la sección de estilo de vida">
                  Estilo de Vida
                </a>
              </NavItem>
            </NavList>
            <SearchSection>
              <SearchButton
                aria-label="Abrir barra de búsqueda"
                role="button"
              >
                <img src={searchIcon} alt="Icono de búsqueda" />
              </SearchButton>
            </SearchSection>
          </Menu>
          <MenuDropdown
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </Navigation>
      </Container>
    </HeaderContainer>
  );
};

export default Header;