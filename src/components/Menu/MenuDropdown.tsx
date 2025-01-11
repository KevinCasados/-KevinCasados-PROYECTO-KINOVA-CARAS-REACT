import React, { useEffect, useRef } from "react";
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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <MenuContainer
      role="menu"
      aria-expanded={isOpen}
      aria-hidden={!isOpen}
      isOpen={isOpen}
    >
      <CloseButtonContainer>
        <MenuLogo src={logoCaras} alt="Logo de CARAS México" />
        <CloseButton
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Cerrar el menú desplegable"
        >
          X
        </CloseButton>
      </CloseButtonContainer>
      <NavList>
        <NavItem>
          <a href="#" role="menuitem" aria-label="Ir a la página de inicio">
            Inicio
          </a>
        </NavItem>
        <NavItem>
          <a href="#" role="menuitem" aria-label="Ir a la sección de entretenimiento">
            Entretenimiento
          </a>
        </NavItem>
        <NavItem>
          <a href="#" role="menuitem" aria-label="Ir a la sección de realeza">
            Realeza
          </a>
        </NavItem>
        <NavItem>
          <a href="#" role="menuitem" aria-label="Ir a la sección de moda">
            Moda
          </a>
        </NavItem>
        <NavItem>
          <a href="#" role="menuitem" aria-label="Ir a la sección de estilo de vida">
            Estilo de Vida
          </a>
        </NavItem>
      </NavList>
    </MenuContainer>
  );
};

export default MenuDropdown;