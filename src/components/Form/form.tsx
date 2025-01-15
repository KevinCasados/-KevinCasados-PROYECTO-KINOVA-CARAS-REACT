import React, { useState } from "react";
import {
  Wrapper,
  BannerRow,
  BannerDesc,
  BannerTitle,
  BannerText,
  NewsLetter,
  InputRow,
  InputField,
  SubscribeButton,
  AlertBox,
  BannerImg,
  Img,
  Container,
} from "./styles";

// Tipos para el estado de alerta
interface AlertState {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

const Form: React.FC = () => {
  const [alert, setAlert] = useState<AlertState>({
    message: "",
    type: "success",
    visible: false,
  });

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 4000); // Ocultar después de 4 segundos
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();

    if (!name) {
      showAlert("El campo de nombre no puede estar vacío.", "error");
      nameInput.setAttribute("aria-invalid", "true");
      return;
    } else {
      nameInput.setAttribute("aria-invalid", "false");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("El correo electrónico no tiene un formato válido.", "error");
      emailInput.setAttribute("aria-invalid", "true");
      return;
    } else {
      emailInput.setAttribute("aria-invalid", "false");
    }

    showAlert("¡Suscripción exitosa!", "success");
    form.reset();
  };

  return (
    <Wrapper>
      <AlertBox
        type={alert.type}
        visible={alert.visible}
        role="alert"
        aria-live="assertive"
      >
        {alert.message}
      </AlertBox>
      <Container>
        <BannerRow>
          <BannerDesc>
            <BannerTitle>
              <span>Suscríbete Ahora</span> a nuestro Newsletter
            </BannerTitle>
            <BannerText id="newsletter-description">
              Al suscribirte al newsletter de CARAS, tendrás acceso exclusivo a
              contenidos especiales, novedades sobre tus artistas favoritos,
              tendencias en moda y eventos destacados. Únete a miles de lectores
              que ya disfrutan de la mejor información directamente en su bandeja
              de entrada.
            </BannerText>
            <NewsLetter
              onSubmit={handleSubmit}
              aria-labelledby="newsletter-description"
            >
              <InputRow>
                <InputField
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  aria-label="Ingresa tu nombre"
                  aria-describedby="newsletter-description"
                />
              </InputRow>
              <InputRow>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  aria-label="Ingresa tu correo electrónico"
                  aria-describedby="newsletter-description"
                />
              </InputRow>
              <SubscribeButton type="submit" aria-label="Enviar formulario de suscripción">
                <span>Enviar</span>
              </SubscribeButton>
            </NewsLetter>
          </BannerDesc>
          <BannerImg>
            <Img src="/assets/banner-img.webp" loading='lazy' alt="Imagen representativa del boletín CARAS" />
          </BannerImg>
        </BannerRow>
      </Container>
    </Wrapper>
  );
};

export default Form;