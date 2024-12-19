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
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo" aria-label="Footer with links to store, support, and social media">
      <FooterContainer>
        <FooterLeft>
          <SubscribeSection role="region" aria-labelledby="subscribe-section-title">
            <h3 id="subscribe-section-title">CARAS</h3>
            <p>Recibe las mejores noticias y novedades del mundo del entretenimiento directamente en tu correo.</p>
            <div>
              <input type="email" placeholder="Correo Electrónico" aria-label="Email Address for newsletter subscription" />
              <button aria-label="Sign up for newsletter">SUSCRÍBETE</button>
            </div>
            <SocialIcons>
              <a href="#" aria-label="Visit our Facebook page"><FaFacebookF /></a>
              <a href="#" aria-label="Visit our Instagram page"><FaInstagram /></a>
              <a href="#" aria-label="Visit our YouTube channel"><FaYoutube /></a>
              <a href="https://github.com/KevinCasados" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub page"><FaGithub /></a>
              <a href="#" aria-label="Visit our Twitch page"><FaTwitch /></a>
            </SocialIcons>
          </SubscribeSection>
        </FooterLeft>

        <FooterRight role="navigation" aria-label="Footer navigation links">
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

          <FooterColumn role="region" aria-labelledby="kinova-links">
            <FooterTitle id="kinova-links">Soporte</FooterTitle>
            <FooterLink href="#">Preguntas Frecuentes</FooterLink>
            <FooterLink href="#">Política de Privacidad</FooterLink>
            <FooterLink href="#">Términos y Condiciones</FooterLink>
            <FooterLink href="#">Redes</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="support-links">
            <FooterTitle id="support-links">Síguenos</FooterTitle>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">YouTube</FooterLink>
          </FooterColumn>
        </FooterRight>
      </FooterContainer>

      <FooterBottom>
      © 2024 CARAS. Todos los derechos reservados.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;