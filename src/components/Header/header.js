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
import logoCaras from "../../assets/Logo 2.png";
import searchIcon from "../../assets/search-icon-black.svg";
import MenuDropdown from "../Menu/MenuDropdown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

   // Cerrar menú en resize
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

          {/* Botón del menú hamburguesa */}
          <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>

          {/* Menú */}
          <Menu isMenuOpen={isMenuOpen}>
            <NavList>
              <NavItem className="active">
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