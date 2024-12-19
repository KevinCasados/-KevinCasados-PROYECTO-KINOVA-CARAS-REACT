import React from "react";
import {
  MenuContainer,
  CloseButtonContainer,
  MenuLogo,
  CloseButton,
  NavList,
  NavItem,
} from "./styles";
import logoCaras from "../../assets/Logo 2.png";

const MenuDropdown = ({ isOpen, onClose }) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <CloseButtonContainer>
        <MenuLogo src={logoCaras} alt="Logo CARAS" />
        <CloseButton onClick={onClose} aria-label="Cerrar menú">X</CloseButton>
      </CloseButtonContainer>
      <NavList>
        <NavItem><a href="#">Inicio</a></NavItem>
        <NavItem><a href="#">Entretenimiento</a></NavItem>
        <NavItem><a href="#">Realeza</a></NavItem>
        <NavItem><a href="#">Moda</a></NavItem>
        <NavItem><a href="#">Estilo de Vida</a></NavItem>
      </NavList>
    </MenuContainer>
  );
};

export default MenuDropdown;