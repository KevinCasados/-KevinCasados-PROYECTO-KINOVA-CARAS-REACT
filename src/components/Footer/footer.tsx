import React from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SubscribeSection,
  FooterBottom,
} from './styles';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaGithub,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterWrapper
      role="contentinfo"
      aria-label="Sección de pie de página con enlaces a tienda, soporte y redes sociales"
    >
      <FooterContainer>
        <FooterLeft>
          <SubscribeSection
            role="region"
            aria-labelledby="subscribe-section-title"
          >
            <h3 id="subscribe-section-title">CARAS</h3>
            <p id="subscribe-description">
              Recibe las mejores noticias y novedades del mundo del entretenimiento directamente en tu correo.
            </p>
            <div>
              <input
                type="email"
                placeholder="Correo Electrónico"
                aria-label="Dirección de correo electrónico para suscripción al boletín"
                aria-describedby="subscribe-description"
              />
              <button
                aria-label="Suscribirse al boletín de noticias de CARAS"
              >
                SUSCRÍBETE
              </button>
            </div>
            <SocialIcons>
              <a href="#" aria-label="Visita nuestra página de Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Visita nuestra página de Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Visita nuestro canal de YouTube">
                <FaYoutube />
              </a>
              <a
                href="https://github.com/KevinCasados"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita nuestro repositorio de GitHub"
              >
                <FaGithub />
              </a>
              <a href="#" aria-label="Visita nuestra página de Twitch">
                <FaTwitch />
              </a>
            </SocialIcons>
          </SubscribeSection>
        </FooterLeft>

        <FooterRight role="navigation" aria-label="Enlaces de navegación del pie de página">
          <FooterColumn role="region" aria-labelledby="store-links">
            <FooterTitle id="store-links">Sobre CARAS</FooterTitle>
            <FooterLink href="#">Quiénes Somos</FooterLink>
            <FooterLink href="#">Nuestro Equipo</FooterLink>
            <FooterLink href="#">Contáctanos</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="explore-links">
            <FooterTitle id="explore-links">Explorar</FooterTitle>
            <FooterLink href="#">Noticias</FooterLink>
            <FooterLink href="#">Tendencias</FooterLink>
            <FooterLink href="#">Entrevistas</FooterLink>
            <FooterLink href="#">Reportajes Especiales</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="support-links">
            <FooterTitle id="support-links">Soporte</FooterTitle>
            <FooterLink href="#">Preguntas Frecuentes</FooterLink>
            <FooterLink href="#">Política de Privacidad</FooterLink>
            <FooterLink href="#">Términos y Condiciones</FooterLink>
            <FooterLink href="#">Redes</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="social-links">
            <FooterTitle id="social-links">Síguenos</FooterTitle>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">YouTube</FooterLink>
          </FooterColumn>
        </FooterRight>
      </FooterContainer>

      <FooterBottom>© 2024 CARAS. Todos los derechos reservados.</FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;