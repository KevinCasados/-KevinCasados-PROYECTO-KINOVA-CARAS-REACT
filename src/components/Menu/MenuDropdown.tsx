import React from "react";
import {
  MenuContainer,
  CloseButtonContainer,
  MenuLogo,
  CloseButton,
  NavList,
  NavItem,
} from "./styles";

const logoCaras = "/assets/Logo 2.png";

// Definir las props del componente
interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <MenuContainer role="menu" isOpen={isOpen}>
      <CloseButtonContainer>
        <MenuLogo src={logoCaras} alt="Logo CARAS" />
        <CloseButton onClick={onClose} aria-label="Cerrar menú">X</CloseButton>
      </CloseButtonContainer>
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
    </MenuContainer>
  );
};

export default MenuDropdown;